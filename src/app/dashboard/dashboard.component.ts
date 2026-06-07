import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { MatDialog } from '@angular/material/dialog';
import { AwardModalComponent } from '../modals/award-modal/award-modal.component';
import { ResearchModalComponent } from '../modals/research-modal/research-modal.component';
import { PublicationsModalComponent } from '../modals/publications-modal/publications-modal.component';
import { JournalsModalComponent } from '../modals/journals-modal/journals-modal.component';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';
import { StudentsModalComponent } from '../modals/students-modal/students-modal.component';
import { SponsoredResearchModalComponent } from '../modals/sponsored-research-modal/sponsored-research-modal.component';
import {
  Award,
  Conference,
  Fund,
  Journal,
  Person,
  ResearchItem,
  StudentCategory,
  FIREBASE_PATHS,
} from '../models/content.models';
import { parsePeople } from '../utils/people-parser';

interface AdminSection {
  id: string;
  label: string;
}

interface StudentGroup {
  label: string;
  detailLabel: string;
  type: StudentCategory;
  data: Person[];
  editable: boolean;
  spaced: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  readonly sections: AdminSection[] = [
    { id: 'awards', label: 'Awards' },
    { id: 'publications', label: 'Publications' },
    { id: 'research', label: 'Research' },
    { id: 'students', label: 'Students' },
    { id: 'sponsoredResearch', label: 'Funding' },
  ];

  studentGroups: StudentGroup[] = [];

  researchData: ResearchItem[];
  awardsData: Award[];
  length: number
  activePage: string;

  journalsData: Journal[];
  conferencesData: Conference[];
  lengthOfConference: number = 0;

  searchJournals = '';
  searchPublications = '';

  director: Person[] = [];
  masters: Person[] = [];
  ms_alumni: Person[] = [];
  phd_alumni: Person[] = [];
  phds: Person[] = [];
  post_doc_alumni: Person[] = [];
  undergrad_alumni: Person[] = [];
  undergraduates: Person[] = [];

  fundsData: Fund[];
  totalFunds: any;
  searchFunds: any;

  storageRef: AngularFireStorageReference;

  constructor(
    private databaseService: DatabaseService,
    private dialogRef: MatDialog,
    private afStorage: AngularFireStorage,
    private afAuth: AngularFireAuth,
    private router: Router,
  ) { }

  logout(): void {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }

  ngOnInit(): void {
    this.activePage = "awards";
    this.getData('awards');
  }

  async getData(page: string) {
    if (page == "awards") {
      const data = await this.databaseService.getAwards();
      this.awardsData = data ?? [];
      this.length = this.awardsData.length;
      console.log(this.awardsData);
    }
    if (page == "research") {
      const data = await this.databaseService.getResearch();
      this.researchData = data ?? [];
      this.length = this.researchData.length;
    }
    if (page == "sponsoredResearch") {
      const funds = await this.databaseService.getFunds();
      this.fundsData = funds ?? [];
      console.log(this.fundsData);

      const funding = await this.databaseService.getFundingSummary();
      this.totalFunds = funding?.total;
      console.log(this.totalFunds);
    }
    if (page == "publications") {
      this.journalsData = []
      this.conferencesData = []

      const journals = await this.databaseService.getJournals();
      this.journalsData = journals ?? [];
      this.length = this.journalsData.length;

      const conferences = await this.databaseService.getConferences();
      this.conferencesData = conferences ?? [];
      this.lengthOfConference = this.conferencesData.length;
    }

    if (page == "students") {
      this.director = [];
      this.masters = [];
      this.ms_alumni = [];
      this.phd_alumni = [];
      this.phds = [];
      this.post_doc_alumni = [];
      this.undergrad_alumni = [];
      this.undergraduates = [];

      const people = await this.databaseService.getPeople();
      const parsed = parsePeople(people);

      this.director = parsed.director;
      this.masters = parsed.masters;
      this.ms_alumni = parsed.ms_alumni;
      this.phd_alumni = parsed.phd_alumni;
      this.phds = parsed.phds;
      this.post_doc_alumni = parsed.post_doc_alumni;
      this.undergrad_alumni = parsed.undergrad_alumni;
      this.undergraduates = parsed.undergraduates;
      this.buildStudentGroups();
    }
  }

  private buildStudentGroups(): void {
    this.studentGroups = [
      { label: 'PhD Students', detailLabel: 'Research', type: 'phds', data: this.phds, editable: true, spaced: false },
      { label: 'Master Students', detailLabel: 'Research', type: 'masters', data: this.masters, editable: true, spaced: true },
      { label: 'Post-Doc Alumni', detailLabel: 'Position', type: 'post_doc_alumni', data: this.post_doc_alumni, editable: true, spaced: true },
      { label: 'PhD Alumni', detailLabel: 'Position', type: 'phd_alumni', data: this.phd_alumni, editable: true, spaced: true },
      { label: 'MS Alumni', detailLabel: 'Position', type: 'ms_alumni', data: this.ms_alumni, editable: true, spaced: true },
    ];
  }

  openDialog(page: string, data: any, index: number, type: any, studentType: string) {
    if (page == "awards") {
      const dialog = this.dialogRef.open(AwardModalComponent, {
        data: {
          length: this.length,
          data: data,
          type: type,
          index: index,
        }
      });

      dialog.afterClosed().subscribe(() => {
        this.getData(page);
      });
    }

    if (page == "research") {
      const dialog = this.dialogRef.open(ResearchModalComponent, {
        data: {
          length: this.length,
          data: data,
          type: type,
          index: index,
        }
      });

      dialog.afterClosed().subscribe(() => {
        this.getData(page);
      });
    }

    if (page == "publications") {
      const dialog = this.dialogRef.open(PublicationsModalComponent, {
        data: {
          length: this.length,
          data: data,
          type: type,
          index: index,
        }
      });

      dialog.afterClosed().subscribe(() => {
        this.getData(page);
      });
    }

    if (page == "journals") {
      const dialog = this.dialogRef.open(JournalsModalComponent, {
        data: {
          length: this.length,
          data: data,
          type: type,
          index: index,
        }
      });

      dialog.afterClosed().subscribe(() => {
        this.getData(page);
      });
    }

    if (page == "students") {
      const dialog = this.dialogRef.open(StudentsModalComponent, {
        data: {
          length: this.length,
          data: data,
          type: type,
          index: index,
          studentType: studentType,
        }
      });

      dialog.afterClosed().subscribe(() => {
        this.getData(page);
      });
    }

    if (page == "sponsoredResearch") {
      const dialog = this.dialogRef.open(SponsoredResearchModalComponent, {
        data: {
          length: this.length,
          data: data,
          type: type,
          index: index,
        }
      });

      dialog.afterClosed().subscribe(() => {
        this.getData(page);
      });
    }
  }

  togglePage(page: string) {
    this.activePage = page;
    this.getData(page);
  }

  editAwardsData(index: number) {
    this.openDialog("awards", this.awardsData, index, "edit", null);
    console.log(index, this.awardsData);
  }

  async removeAward(index: number, page: string) {
    if (confirm("are you sure you want to delete this? ")) {
      this.awardsData.splice(index, 1);
      await this.databaseService.updateData(FIREBASE_PATHS.AWARDS, this.awardsData);
      this.getData(page);
    }
  }

  editResearchData(index: number) {
    this.openDialog("research", this.researchData, index, "edit", null);
    console.log(index, this.researchData);
  }

  async removeResearch(index: number, page: string) {
    if (confirm("are you sure you want to delete this? ")) {
      this.researchData.splice(index, 1);
      await this.databaseService.updateData(FIREBASE_PATHS.RESEARCH, this.researchData);
      this.getData(page);
    }
  }

  editJournalsData(index: number) {
    this.openDialog("journals", this.journalsData, index, "edit", null);
    console.log(index, this.journalsData);
  }

  async removeJournals(index: number, page: string) {
    if (confirm("are you sure you want to delete this? ")) {
      this.journalsData.splice(index, 1);
      await this.databaseService.updateData(FIREBASE_PATHS.JOURNALS, this.journalsData);
      this.getData(page);
    }
  }

  editPublicationsData(index: number) {
    this.openDialog("publications", this.conferencesData, index, "edit", null);
    console.log(index, this.conferencesData);
  }

  async removePublications(index: number, page: string) {
    if (confirm("are you sure you want to delete this? ")) {
      this.conferencesData.splice(index, 1);
      await this.databaseService.updateData(FIREBASE_PATHS.CONFERENCES, this.conferencesData);
      this.getData(page);
    }
  }

  editStudentsData(index: number, data: Person[], studentType: StudentCategory) {
    this.openDialog("students", data, index, "edit", studentType);
  }

  async removeStudent(index: number, page: string, data: Person[], studentType: StudentCategory) {
    if (confirm("are you sure you want to delete this? ")) {
      data.splice(index, 1);
      await this.databaseService.updateData(FIREBASE_PATHS.peopleCategory(studentType), data);
      this.getData(page);
    }
  }

  editFundsData(index: number) {
    this.openDialog("sponsoredResearch", this.fundsData, index, "edit", null);
    console.log(index, this.fundsData);
  }

  async removeFunds(index: number, page: string) {
    if (confirm("are you sure you want to delete this? ")) {
      this.fundsData.splice(index, 1);
      await this.databaseService.updateData(FIREBASE_PATHS.FUNDS, this.fundsData);
      this.getData(page);
    }
  }

}
