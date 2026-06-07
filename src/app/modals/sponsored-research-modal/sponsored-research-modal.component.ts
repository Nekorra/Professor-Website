import { Component, OnInit, Inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Fund, FIREBASE_PATHS } from 'src/app/models/content.models';

@Component({
  selector: 'app-sponsored-research-modal',
  templateUrl: './sponsored-research-modal.component.html',
  styleUrls: ['./sponsored-research-modal.component.css']
})
export class SponsoredResearchModalComponent implements OnInit {

  length: number;
  amount: string;
  image: string = "";
  purpose: string;
  role: string;
  source: string;
  timespan: string;

  fundsData: Fund[];
  index: number;
  type: string;

  constructor(
    private databaseService: DatabaseService,
    private storage: AngularFireStorage,
    private dialogRef: MatDialogRef<SponsoredResearchModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data.type == "add") {
      this.fundsData = this.data.data;
      this.length = this.data.length;
      this.type = this.data.type;
    }
    if (this.data.type == "edit") {
      this.fundsData = this.data.data;
      this.index = this.data.index;
      this.amount = this.data.data[this.index].amount
      this.image = this.data.data[this.index].img_name
      this.purpose = this.data.data[this.index].purpose
      this.role = this.data.data[this.index].role
      this.timespan = this.data.data[this.index].timespan
      this.source = this.data.data[this.index].source
      this.length = this.data.length;
      this.type = this.data.type;
    }
  }

  async addFund() {
    if (this.type == 'add') {
      this.fundsData.splice(0, 0, { amount: this.amount, img_name: this.image, purpose: this.purpose, role: this.role, source: this.source, timespan: this.timespan })
      await this.databaseService.addFundData(FIREBASE_PATHS.FUNDS, this.fundsData);
      alert("Successfully added Data");
    }

    if (this.type == 'edit') {
      this.fundsData[this.index] = { amount: this.amount, img_name: this.image, purpose: this.purpose, role: this.role, source: this.source, timespan: this.timespan }
      await this.databaseService.addFundData(FIREBASE_PATHS.FUNDS, this.fundsData);
      alert("Successfully edited Data");
    }

    this.dialogRef.close();
  }

  async onFileChange(event: any) {
    const file = event.target.files[0]
    if (file) {
      const path = `awards/${file.name}`
      const uploadTask = await this.storage.upload(path, file);
      this.image = await uploadTask.ref.getDownloadURL();
      console.log(this.image);
    }
  }

  async removeImage() {
    if (!this.image) {
      return;
    }
    if (confirm('Are you sure you want to remove this image?')) {
      console.log('Removing image')
      this.storage.refFromURL(this.image).delete();
      this.image = "";
      if (this.type === 'edit' && this.index != null) {
        this.fundsData[this.index] = { amount: this.amount, img_name: this.image, purpose: this.purpose, role: this.role, source: this.source, timespan: this.timespan }
        await this.databaseService.addFundData(FIREBASE_PATHS.FUNDS, this.fundsData);
      }
    }
  }

}
