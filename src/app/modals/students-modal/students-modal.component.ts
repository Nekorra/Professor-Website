import { Component, OnInit, Inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-students-modal',
  templateUrl: './students-modal.component.html',
  styleUrls: ['./students-modal.component.css']
})
export class StudentsModalComponent implements OnInit {

  img_name: string = "";
  name: string = "";
  research: string = "";
  job: string = "";
  index: number;
  type: string;
  studentType: string;
  image: string = "";

  studentData: any;

  constructor(
    private databaseService: DatabaseService,
    private storage: AngularFireStorage,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data.type == "add") {
      this.studentData = this.data.data;
      this.studentType = this.data.studentType;
      this.type = this.data.type;

    }
    if (this.data.type == "edit") {
      this.studentData = this.data.data;
      this.index = this.data.index;
      this.type = this.data.type;
      this.studentType = this.data.studentType;
      this.name = this.data.data[this.index].name
      this.research = this.data.data[this.index].research
      this.job = this.data.data[this.index].job; 
      this.image = this.data.data[this.index].img_name;
    }
  }

  async addStudent() {
    if (this.type == 'add') {
      this.studentData.splice(0,0, {img_name: this.image, name: this.name, job: this.job, research: this.research})
      await this.databaseService.addStudentData(`people/${this.studentType}/`, this.studentData);
      alert("Successfully added Data");
    }

    if (this.type == 'edit') {
      this.studentData[this.index] = {img_name: this.image, name: this.name, job: this.job, research: this.research}
      console.log(this.studentData)
      await this.databaseService.addStudentData(`people/${this.studentType}/`, this.studentData);
      alert("Successfully edited Data");
    }
    
  }

  async onFileChange(event: any) {
    const file = event.target.files[0]
    if (file) {
      const path = `research/${file.name}`
      const uploadTask = await this.storage.upload(path, file);
      this.image = await uploadTask.ref.getDownloadURL();
      console.log(this.image);
    }
  }

  async removeImage() {
    if (confirm('Are you sure you want to remove this image?')) {
      console.log('Removing image')
      this.storage.refFromURL(this.image).delete();
      this.image = "";
      this.studentData[this.index] = {img_name: this.image, name: this.name, job: this.job, research: this.research}
      await this.databaseService.addStudentData(`people/${this.studentType}/`, this.studentData);
    }
    

  }
}
