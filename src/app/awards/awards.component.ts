import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  awardsData: any[] = [];

  constructor(
    private RestapiService: RestapiService,
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    console.log("here");
    this.RestapiService.getData("https://Nekorra.github.io/prof-data/honors.json").subscribe((res) => {
      console.log(res);
      this.awardsData = res["awards"];
    })

  
  }

}
