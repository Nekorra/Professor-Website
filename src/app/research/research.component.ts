import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  researchData: any;
  constructor(
    private databaseService: DatabaseService
  ) {}

  ngOnInit() {
    this.getData();
  }
  
  getData() {
    
    this.databaseService.getData("research/research").then((res: any) => {
      this.researchData = res;
      this.researchData = this.researchData.flat();
      console.log(this.researchData);
    })

    
  }

}
