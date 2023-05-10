import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { MatDialog } from '@angular/material/dialog';
import { AwardModalComponent } from '../modals/award-modal/award-modal.component';
import { ResearchModalComponent } from '../modals/research-modal/research-modal.component';
import { PublicationsModalComponent } from '../modals/publications-modal/publications-modal.component';
import { JournalsModalComponent } from '../modals/journals-modal/journals-modal.component';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';

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
    if ( page == "publications") {
      this.journalsData = []
      this.conferencesData = []
      this.databaseService.getData("journals/journals").then((res: any) => {
        console.log(res);
        this.journalsData = res;
        this.journalsData = this.journalsData.flat();
        this.length = this.researchData.length;
      })
  
      this.databaseService.getData("publications/conferences").then((res: any) => {
        console.log(res);
        this.conferencesData = res;
        this.conferencesData = this.conferencesData.flat();
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

  openDialog(page: string, data: any, index: number, type: any) {
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
          length: this.length
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
  }

  

  togglePage(page: string) {
    this.activePage = page;
    this.getData(page);
  }

  editAwardsData(index: number) {
    this.openDialog("awards", this.awardsData, index, "edit");
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
    this.openDialog("research", this.researchData, index, "edit");
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
    this.openDialog("publications", this.journalsData, index, "edit");
    console.log(index, this.researchData);
  }

  async removeJournals(index: number, page: string) {
    if (confirm("are you sure you want to delete this? ")) {
      this.journalsData.splice(index, 1);
      await this.databaseService.remove(`journals/journals`, this.researchData);
      this.getData(page);
    }
  }

}
