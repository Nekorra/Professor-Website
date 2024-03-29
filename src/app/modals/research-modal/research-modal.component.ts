import { Component, OnInit, Inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-research-modal',
  templateUrl: './research-modal.component.html',
  styleUrls: ['./research-modal.component.css']
})
export class ResearchModalComponent implements OnInit {

  content: string = "";
  img_name: string = "";
  title: string = "";
  length: number;
  researchData: any;
  index: number;
  type: string;
  image: string = "";

  constructor(
    private databaseService: DatabaseService,
    private storage: AngularFireStorage,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data.type == "add") {
      this.researchData = this.data.data;
      this.length = this.data.length;
      this.type = this.data.type;
    }
    if (this.data.type == "edit") {
      this.researchData = this.data.data;
      this.index = this.data.index;
      this.content = this.data.data[this.index].content
      this.title = this.data.data[this.index].title
      this.length = this.data.length; 
      this.type = this.data.type;
      this.image = this.data.data[this.index].img_name;
    }
  }

  async addResearch() {
    if (this.type == 'add') {
      this.researchData.splice(0,0, {content: this.content, img_name: this.image, title: this.title})
      await this.databaseService.addResearchData(`research/research/`, this.researchData);
      alert("Successfully added Data");
    }

    if (this.type == 'edit') {
      this.researchData[this.index] = {content: this.content, img_name: this.image, title: this.title}
      console.log(this.researchData)
      await this.databaseService.addResearchData(`research/research/`, this.researchData);
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
      this.researchData[this.index] = {content: this.content, img_name: this.image, title: this.title}
      await this.databaseService.addResearchData(`research/research/`, this.researchData);
    }
    

  }

}
