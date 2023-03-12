import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../services/restapi.service';
@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  researchData: any[] = []
  constructor(
    private RestapiService: RestapiService,
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    console.log("here");
    this.RestapiService.getData("https://Nekorra.github.io/prof-data/research.json").subscribe((res) => {
      console.log(res);
      this.researchData = res["research"];
      console.log(this.researchData);
    })

  
  }

}
