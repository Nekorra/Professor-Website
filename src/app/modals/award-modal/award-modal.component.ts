import { Component, OnInit, Inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  type: string;
  index: number;
  awardsData: any;
  
  constructor(
    private databaseService: DatabaseService,
    @Inject(MAT_DIALOG_DATA) public data: any
    )
   { }

  ngOnInit(): void {
    if (this.data.type == 'add') {
      this.awardsData = this.data.data;
      console.log(this.awardsData);
      this.length = this.data.length;
      this.type = this.data.type;
    }
    if (this.data.type == 'edit') {
      this.awardsData = this.data.data;
      console.log(this.data.index);
      this.index = this.data.index;
      this.name = this.data.data[this.index].name;
      this.link = this.data.data[this.index].link;
      this.timespan = this.data.data[this.index].timespan;
      this.earnings = this.data.data[this.index].earnings;
      this.extra = this.data.data[this.index].extra;

    }
  }


  async addAward() {
    if (this.type == 'add') {
      this.awardsData.splice(0, 0, {name: this.name, link: this.link, timespan: this.timespan, earnings: this.earnings, extra: this.extra})
      await this.databaseService.addAwardData(`honors/awards/`, this.awardsData);
      alert("Successfully added Data");
    }
    if (this.type == "edit") {
      this.awardsData[this.index] = {name: this.name, link: this.link, timespan: this.timespan, earnings: this.earnings, extra: this.extra}
      await this.databaseService.addAwardData(`honors/awards/`, this.awardsData);
      alert("Successfully edited Data");
    }
    
  }

}
