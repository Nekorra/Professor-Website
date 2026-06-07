import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Fund, Person, FIREBASE_PATHS } from '../models/content.models';
import { parsePeople } from '../utils/people-parser';

interface Stat {
  value: string;
  label: string;
}

interface Sponsor {
  name: string;
  src: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fundsData: Fund[] = [];
  searchFunds = '';
  totalFunds: string | undefined;
  alumni: Person[] = [];
  bioExpanded = false;

  readonly stats: Stat[] = [
    { value: '200+', label: 'Peer-reviewed publications' },
    { value: '$17M+', label: 'Research funding directed' },
    { value: '8', label: 'Best-paper awards & nominations' },
    { value: 'NSF CHEST', label: 'Center director' },
  ];

  readonly researchInterests: string[] = [
    'Applied Machine Learning',
    'Hardware Security and Trust',
    'Adversarial Machine Learning',
    'Cybersecurity',
    'Big Data Computing',
    'Energy-Efficient Big Data Acceleration',
    'Heterogeneous Computing',
    'Wearable Biomedical Computing',
    'Architecture Mapping and Scheduling',
    'Emerging STT Logic for Hardware Security',
    '3D Integration and Design',
    'Low-Power and Thermal-Aware Design',
  ];

  readonly sponsors: Sponsor[] = [
    { name: 'National Science Foundation', src: 'assets/nsf.png' },
    { name: 'DARPA', src: 'assets/darpa.png' },
    { name: 'NIST', src: 'assets/nist.png' },
    { name: 'Intel', src: 'assets/intel.png' },
    { name: 'General Motors', src: 'assets/gm.png' },
    { name: 'UC Davis', src: 'assets/davis.png' },
  ];

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.getData();
  }

  toggleBio(): void {
    this.bioExpanded = !this.bioExpanded;

    if (this.bioExpanded) {
      requestAnimationFrame(() => {
        document.getElementById('about-bio-more')?.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          block: 'nearest',
        });
      });
    }
  }

  async getData(): Promise<void> {
    const funds = await this.databaseService.getData<Fund[]>(FIREBASE_PATHS.FUNDS);
    this.fundsData = (funds ?? []).filter(Boolean);

    const funding = await this.databaseService.getFundingSummary();
    this.totalFunds = funding?.total;

    const people = await this.databaseService.getPeople();
    this.alumni = parsePeople(people).alumni;
  }
}
