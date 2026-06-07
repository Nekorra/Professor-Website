import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DatabaseService } from '../services/database.service';
import { Conference, Journal } from '../models/content.models';

type PublicationTab = 'all' | 'journals' | 'conferences';

interface ConferenceYearGroup {
  year: string;
  items: Conference[];
}

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
})
export class PublicationsComponent implements OnInit {
  journalsData: Journal[] = [];
  conferencesData: Conference[] = [];
  searchQuery = '';
  activeTab: PublicationTab = 'all';

  constructor(
    private databaseService: DatabaseService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    const [journals, conferences] = await Promise.all([
      this.databaseService.getJournals(),
      this.databaseService.getConferences(),
    ]);

    this.journalsData = this.flattenEntries<Journal>(journals);
    this.conferencesData = this.flattenEntries<Conference>(conferences);
  }

  setTab(tab: PublicationTab): void {
    this.activeTab = tab;
  }

  get showJournals(): boolean {
    return this.activeTab === 'all' || this.activeTab === 'journals';
  }

  get showConferences(): boolean {
    return this.activeTab === 'all' || this.activeTab === 'conferences';
  }

  get filteredJournals(): Journal[] {
    return this.filterEntries(this.journalsData);
  }

  get filteredConferences(): Conference[] {
    return this.filterEntries(this.conferencesData);
  }

  get conferenceYearGroups(): ConferenceYearGroup[] {
    const groups = new Map<string, Conference[]>();

    for (const conference of this.filteredConferences) {
      const year = (conference.year || 'Undated').trim();
      const bucket = groups.get(year) || [];
      bucket.push(conference);
      groups.set(year, bucket);
    }

    return Array.from(groups.entries())
      .sort(([yearA], [yearB]) => this.compareYears(yearB, yearA))
      .map(([year, items]) => ({ year, items }));
  }

  get visibleCount(): number {
    let count = 0;
    if (this.showJournals) {
      count += this.filteredJournals.length;
    }
    if (this.showConferences) {
      count += this.filteredConferences.length;
    }
    return count;
  }

  journalNumber(index: number): number {
    return this.filteredJournals.length - index;
  }

  highlightAuthors(authors: string): SafeHtml {
    if (!authors) {
      return '';
    }

    const escaped = authors
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

    const html = escaped.replace(
      /(Homayoun[^\s,&]*)/gi,
      '<strong class="pub-item__pi">$1</strong>',
    );

    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  private filterEntries<T>(entries: T[]): T[] {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) {
      return entries;
    }

    return entries.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(query),
    );
  }

  private flattenEntries<T>(value: unknown): T[] {
    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value.some(Array.isArray) ? ([] as T[]).concat(...value) : (value as T[]);
    }

    if (typeof value === 'object') {
      return Object.keys(value as Record<string, T>)
        .sort((a, b) => Number(a) - Number(b))
        .map((key) => (value as Record<string, T>)[key]);
    }

    return [];
  }

  private compareYears(a: string, b: string): number {
    const numA = Number.parseInt(a, 10);
    const numB = Number.parseInt(b, 10);

    if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
      return numA - numB;
    }

    return a.localeCompare(b);
  }
}
