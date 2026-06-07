import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DatabaseService } from '../services/database.service';
import { ResearchItem } from '../models/content.models';
import { emphasizePhrases } from '../utils/text-emphasis';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css'],
})
export class ResearchComponent implements OnInit {
  researchData: ResearchItem[] = [];
  researchIntro: ResearchItem | null = null;
  expandedProjects = new Set<string>();
  searchResearch = '';

  constructor(
    private databaseService: DatabaseService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData(): Promise<void> {
    const res = await this.databaseService.getResearch();
    const items = this.flattenEntries(res);

    this.researchIntro = items.find((item) => item.title === 'ASEEC') || null;
    this.researchData = items.filter((item) => item.title !== 'ASEEC');
  }

  get filteredProjects(): ResearchItem[] {
    const query = this.searchResearch.trim().toLowerCase();
    if (!query) {
      return this.researchData;
    }

    return this.researchData.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(query),
    );
  }

  toggleReadMore(title: string): void {
    if (this.expandedProjects.has(title)) {
      this.expandedProjects.delete(title);
    } else {
      this.expandedProjects.add(title);
    }
  }

  isExpanded(title: string): boolean {
    return this.expandedProjects.has(title);
  }

  get introParagraphs(): string[] {
    const content = this.researchIntro?.content?.trim();
    if (!content) {
      return [];
    }

    const sentences = content.match(/[^.!?]+[.!?]+/g)?.map((s) => s.trim()) ?? [content];
    const paragraphs: string[] = [];

    for (let i = 0; i < sentences.length; i += 2) {
      paragraphs.push(sentences.slice(i, i + 2).join(' '));
    }

    return paragraphs.length ? paragraphs : [content];
  }

  emphasizeIntroText(paragraph: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(emphasizePhrases(paragraph));
  }

  private flattenEntries(value: unknown): ResearchItem[] {
    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value.some(Array.isArray)
        ? ([] as ResearchItem[]).concat(...value)
        : value;
    }

    if (typeof value === 'object') {
      return Object.keys(value as Record<string, ResearchItem>)
        .sort((a, b) => Number(a) - Number(b))
        .map((key) => (value as Record<string, ResearchItem>)[key]);
    }

    return [];
  }
}
