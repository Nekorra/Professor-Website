import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  journalsData: any[] = [];
  conferencesData: any[] = [];
  conferenceYears: any[] = [];

  constructor(
    private RestapiService: RestapiService,
  ) {}

  ngOnInit() {
    console.log("here");
    this.getData();
  }

  getData() {
    console.log("here");
    this.RestapiService.getData("https://Nekorra.github.io/prof-data/journals.json").subscribe((res) => {
      console.log(res);
      this.journalsData = res["journals"];
    })

    this.RestapiService.getData("http://localhost:3000/publications.json").subscribe((res) => {
      console.log(res);
      this.conferencesData = res["conferences"];
      this.getYears();
    })
  }

  getYears() {
    this.conferenceYears = [];
    for (let i = 0; i < this.conferencesData.length; i++) {
      this.conferenceYears.push(this.conferencesData[i]["year"]);
    }
    console.log(this.conferenceYears);
  }

}
