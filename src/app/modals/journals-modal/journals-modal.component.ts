import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-journals-modal',
  templateUrl: './journals-modal.component.html',
  styleUrls: ['./journals-modal.component.css']
})
export class JournalsModalComponent implements OnInit {


  length: number;
  title: string;
  url: string;
  journal: string;
  authors: string;


  constructor(
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
  }

  async addJournal() {
    await this.databaseService.addJournalData(`journals/journals`, this.title, this.url, this.journal, this.authors);
    alert("Successfully added Data");
  }

}
