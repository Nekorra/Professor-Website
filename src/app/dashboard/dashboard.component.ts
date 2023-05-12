import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { MatDialog } from '@angular/material/dialog';
import { AwardModalComponent } from '../modals/award-modal/award-modal.component';
import { ResearchModalComponent } from '../modals/research-modal/research-modal.component';
import { PublicationsModalComponent } from '../modals/publications-modal/publications-modal.component';
import { JournalsModalComponent } from '../modals/journals-modal/journals-modal.component';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';
import { StudentsModalComponent } from '../modals/students-modal/students-modal.component';
import { SponsoredResearchModalComponent } from '../modals/sponsored-research-modal/sponsored-research-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  researchData: any;
  awardsData: any;
  length: number  
  activePage: string;

  journalsData: any;
  conferencesData: any;
  lengthOfConference: number = 0;

  searchJournals = '';
  searchPublications = '';

  director: any[] = [];
  masters: any[] = [];
  ms_alumni: any[] = [];
  phd_alumni: any[] = [];
  phds: any[] = [];
  post_doc_alumni: any[] = [];
  undergrad_alumni: any[] = [];
  undergraduates: any[] = [];
  
  fundsData: any;
  totalFunds: any; 
  searchFunds: any;

  storageRef: AngularFireStorageReference;

  constructor(
    private databaseService: DatabaseService,
    private dialogRef: MatDialog,
    private afStorage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.activePage = "awards";
    this.getData('awards');
  }

  async getData(page: string) {
    if (page == "awards") {
      await this.databaseService.getData('honors/awards').then((data) =>{
        this.awardsData = data;
        this.length = this.awardsData.length
      })
      console.log(this.awardsData);
    }
    if ( page == "research") {
      await this.databaseService.getData('research/research').then((data) =>{
        this.researchData = data;
        this.length = this.researchData.length
      })
    }
    if ( page == "sponsoredResearch") {
      await this.databaseService.getData('funding/funds').then((data) => {
        this.fundsData = data;
        //this.awardsData = this.awardsData.flat();
        console.log(this.fundsData)
      });
  
      await this.databaseService.getData('funding').then((data: any) => {
        this.totalFunds= data.total;;
        //this.awardsData = this.awardsData.flat();
        console.log(this.totalFunds)
      });
    }
    if ( page == "publications") {
      this.journalsData = []
      this.conferencesData = []
      this.databaseService.getData("journals/journals").then((res: any) => {
        this.journalsData = res;
        this.length = this.journalsData.length;
      })
  
      this.databaseService.getData("publications/conferences").then((res: any) => {
        this.conferencesData = res;
        this.lengthOfConference = this.conferencesData.length;
      })
    }

    if (page == "students") {
      this.director = [];
      this.masters  = [];
      this.ms_alumni = [];
      this.phd_alumni = [];
      this.phds = [];
      this.post_doc_alumni = [];
      this.undergrad_alumni = [];
      this.undergraduates= [];

      await this.databaseService.getData('people').then((data) => {
        const result = Object.keys(data).map((key) => {
          return { [key]: data[key as keyof typeof data] };
        });
        result.forEach(mobile => {
          for (let key in mobile) {
            for (let i = 0; i < Object.keys(mobile[key]).length; i++) {
              if (`${key}` == "director") {
                this.director.push(mobile[key][i]);
              }
              if (`${key}` == "masters") {
                this.masters.push(mobile[key][i]);
              }
              if (`${key}` == "ms_alumni") {
                this.ms_alumni.push(mobile[key][i]);
              }
              if (`${key}` == "phd_alumni") {
                this.phd_alumni.push(mobile[key][i]);
              }
              if (`${key}` == "phds") {
                this.phds.push(mobile[key][i]);
              }
              if (`${key}` == "post_doc_alumni") {
                this.post_doc_alumni.push(mobile[key][i]);
              }
              if (`${key}` == "undergrad_alumni") {
                this.undergrad_alumni.push(mobile[key][i]);
              }
              if (`${key}` == "undergraduates") {
                this.undergraduates.push(mobile[key][i]);
              }
            }
          }
        })
      })
    }    
  }

  openDialog(page: string, data: any, index: number, type: any, studentType: string) {
    if (page == "awards") {
      const dialog = this.dialogRef.open(AwardModalComponent, {
        data : {
          length: this.length,
          data: data,
          type: type,
          index: index,
        }
      });

      dialog.afterClosed().subscribe(() => {
        // Do stuff after the dialog has closed
        this.getData(page);
      });
    }
    
    if (page == "research") {
      const dialog = this.dialogRef.open(ResearchModalComponent, {
        data : {
          length: this.length,
          data: data,
          type: type,
          index: index,
        }
      });

      dialog.afterClosed().subscribe(() => {
        // Do stuff after the dialog has closed
        this.getData(page);
      });
    }

    if (page == "publications") {
      const dialog = this.dialogRef.open(PublicationsModalComponent, {
        data : {
          length: this.length,
          data: data,
          type: type,
          index: index,
        }
      });

      dialog.afterClosed().subscribe(() => {
        // Do stuff after the dialog has closed
        this.getData(page);
      });
    }

    if (page == "journals") {
      const dialog = this.dialogRef.open(JournalsModalComponent, {
        data : {
          length: this.length,
          data: data,
          type: type,
          index: index,
        }
      });

      dialog.afterClosed().subscribe(() => {
        // Do stuff after the dialog has closed
        this.getData(page);
      });
    }

    if (page == "students") {
      const dialog = this.dialogRef.open(StudentsModalComponent, {
        data : {
          length: this.length,
          data: data,
          type: type,
          index: index,
          studentType: studentType,
        }
      });

      dialog.afterClosed().subscribe(() => {
        // Do stuff after the dialog has closed
        this.getData(page);
      });
    }

    if (page == "sponsoredResearch") {
      const dialog = this.dialogRef.open(SponsoredResearchModalComponent, {
        data : {
          length: this.length,
          data: data,
          type: type,
          index: index,
        }
      });

      dialog.afterClosed().subscribe(() => {
        // Do stuff after the dialog has closed
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

  async removeAward( index: number, page: string) {
    if (confirm("are you sure you want to delete this? ")) {
      this.awardsData.splice(index, 1);
      await this.databaseService.remove(`honors/awards`, this.awardsData);
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
      await this.databaseService.remove(`research/research`, this.researchData);
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
      await this.databaseService.remove(`journals/journals`, this.journalsData);
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
      await this.databaseService.remove(`publications/conferences/`, this.conferencesData);
      this.getData(page);
    }
  }

  editStudentsData(index: number, data: any, studentType: string) {
    this.openDialog("students", data, index, "edit", studentType);
  }

  async removeStudent(index: number, page: string, data: any, studentType: string) {
    if (confirm("are you sure you want to delete this? ")) {
      data.splice(index, 1);
      await this.databaseService.remove(`people/${studentType}/`, data);
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
      await this.databaseService.remove(`funding/funds/`, this.fundsData);
      this.getData(page);
    }
  }

}
