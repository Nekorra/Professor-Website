import { Component, OnInit, Inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

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

  constructor(
    private databaseService: DatabaseService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.length = this.data.length;
  }

  async addResearch() {
    await this.databaseService.addResearchData(`research/research/`, this.content, this.img_name, this.title);
    alert("Successfully added Data");
  }

}
