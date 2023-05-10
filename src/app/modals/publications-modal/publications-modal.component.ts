import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
@Component({
  selector: 'app-publications-modal',
  templateUrl: './publications-modal.component.html',
  styleUrls: ['./publications-modal.component.css']
})
export class PublicationsModalComponent implements OnInit {

  constructor(
    private databaseService: DatabaseService
  ) { }
  
  length: number;
  title: string;
  url: string;
  journal: string;
  authors: string;
  year: string;
  
  ngOnInit(): void {
    
  
  }
  
  async addPublication() {
    await this.databaseService.addPublicationData(`publications/conferences`, this.title, this.url, this.journal, this.authors, this.year);
    alert("Successfully added Data");
  }



}
