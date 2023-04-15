import { Component, OnInit, Inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-award-modal',
  templateUrl: './award-modal.component.html',
  styleUrls: ['./award-modal.component.css']
})
export class AwardModalComponent implements OnInit {

  name: string = "";
  link: string = "";
  timespan: string = "";
  earnings: string = "";
  extra: string = "";
  length: number;
  constructor(
    private databaseService: DatabaseService,
    @Inject(MAT_DIALOG_DATA) public data: any)
   { }

  ngOnInit(): void {
    this.length = this.data.length;
  }


  async addAward() {
    await this.databaseService.addAwardData(`honors/awards/${this.length}`, this.name, this.link, this.timespan, this.earnings, this.extra);
    alert("Successfully added Data");
  }

}
