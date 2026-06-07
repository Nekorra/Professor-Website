import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Award } from '../models/content.models';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
})
export class AwardsComponent implements OnInit {
  searchAwards = '';
  awardsData: Award[] = [];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    const data = await this.databaseService.getAwards();
    this.awardsData = this.flattenEntries(data);
  }

  get filteredAwards(): Award[] {
    const query = this.searchAwards.trim().toLowerCase();
    if (!query) {
      return this.awardsData;
    }

    return this.awardsData.filter((award) =>
      JSON.stringify(award).toLowerCase().includes(query),
    );
  }

  get fundedCount(): number {
    return this.awardsData.filter((award) => !!award.earnings?.trim()).length;
  }

  get linkedCount(): number {
    return this.awardsData.filter((award) => !!award.link?.trim()).length;
  }

  private flattenEntries(value: unknown): Award[] {
    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value.some(Array.isArray) ? ([] as Award[]).concat(...value) : (value as Award[]);
    }

    if (typeof value === 'object') {
      return Object.keys(value as Record<string, Award>)
        .sort((a, b) => Number(a) - Number(b))
        .map((key) => (value as Record<string, Award>)[key]);
    }

    return [];
  }
}
