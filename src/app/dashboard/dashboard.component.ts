import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { MatDialog } from '@angular/material/dialog';
import { AwardModalComponent } from '../modals/award-modal/award-modal.component';
import { ResearchModalComponent } from '../modals/research-modal/research-modal.component';
import { PublicationsModalComponent } from '../modals/publications-modal/publications-modal.component';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentData: any;
  length: number
  activePage: string;

  journalsData: any[] = [];
  conferencesData: any[] = [];
  conferenceYears: any[] = [];
  lengthOfConference: number = 0;

  director: any[] = [];
  masters: any[] = [];
  ms_alumni: any[] = [];
  phd_alumni: any[] = [];
  phds: any[] = [];
  post_doc_alumni: any[] = [];
  undergrad_alumni: any[] = [];
  undergraduates: any[] = [];
  images: any[] = [];

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
        this.currentData= data;
        this.currentData = this.currentData.flat();
        this.length = this.currentData.length
      })
      console.log(this.currentData);
    }
    if ( page == "research") {
      await this.databaseService.getData('research/research').then((data) =>{
        this.currentData= data;
        this.currentData = this.currentData.flat();
        this.length = this.currentData.length
      })
      console.log(this.currentData);
    }
    if ( page == "publications") {
      this.databaseService.getData("journals/journals").then((res: any) => {
        console.log(res);
        this.journalsData = res;
      })
  
      this.databaseService.getData("publications/conferences").then((res: any) => {
        console.log(res);
        this.conferencesData = res;
        this.lengthOfConference = this.conferencesData.length;
        this.getYears();
      })
    }

    if (page == "students") {
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
    this.putImageList();
    
  }


  putImageList() {
    for (let i = 0; i < this.masters.length; i++) {
      if(this.masters[i].img_name != "" || this.masters[i].img_name != null) {
        this.storageRef = this.afStorage.ref("students/" + this.masters[i].img_name);
        this.storageRef.getDownloadURL().toPromise().then(url => {
          this.masters[i].url = url;
        });
      }
    }

    for (let i = 0; i < this.ms_alumni.length; i++) {
      if(this.ms_alumni[i].img_name != "" || this.ms_alumni[i].img_name != undefined) {
        this.storageRef = this.afStorage.ref("students/" + this.ms_alumni[i].img_name);
        this.storageRef.getDownloadURL().toPromise().then(url => {
          this.ms_alumni[i].url = url;
        });
      }
    }

    for (let i = 0; i < this.phd_alumni.length; i++) {
      if(this.phd_alumni[i].img_name != "" || this.phd_alumni[i].img_name != null) {
        this.storageRef = this.afStorage.ref("students/" + this.phd_alumni[i].img_name);
        this.storageRef.getDownloadURL().toPromise().then(url => {
          this.phd_alumni[i].url = url;
        });
      }
     
    }
    for (let i = 0; i < this.phds.length; i++) {
      if(this.phds[i].img_name != "" || this.phds[i].img_name != null) {
        this.storageRef = this.afStorage.ref("students/" + this.phds[i].img_name);
        this.storageRef.getDownloadURL().toPromise().then(url => {
          this.phds[i].url = url;
        });
      }
    }
    for (let i = 0; i < this.post_doc_alumni.length; i++) {
      if(this.post_doc_alumni[i].img_name != "" || this.post_doc_alumni[i].img_name != null) {
        this.storageRef = this.afStorage.ref("students/" + this.post_doc_alumni[i].img_name);
        this.storageRef.getDownloadURL().toPromise().then(url => {
          this.post_doc_alumni[i].url = url;
        });
      }
    }
    for (let i = 0; i < this.undergrad_alumni.length; i++) {
      if(this.undergrad_alumni[i].img_name != "" || this.undergrad_alumni[i].img_name != null) {
        this.storageRef = this.afStorage.ref("students/" + this.undergrad_alumni[i].img_name);
        this.storageRef.getDownloadURL().toPromise().then(url => {
          this.undergrad_alumni[i].url = url;
        });
      }
    }
    for (let i = 0; i < this.undergraduates.length; i++) {
      if(this.undergraduates[i].img_name != "" || this.undergraduates[i].img_name != null) {
        this.storageRef = this.afStorage.ref("students/" + this.undergraduates[i].img_name);
        this.storageRef.getDownloadURL().toPromise().then(url => {
          this.undergraduates[i].url = url;
        });
      }
    }
  }

  getYears() {
    this.conferenceYears = [];
    for (let i = 0; i < this.conferencesData.length; i++) {
      this.conferenceYears.push(this.conferencesData[i]["year"]);
    }
    console.log(this.conferenceYears);
  }

  openDialog(page: string) {
    if (page == "awards") {
      const dialog = this.dialogRef.open(AwardModalComponent, {
        data : {
          length: this.length
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
          length: this.length
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


    
    
  }

  async remove(path: string, index: number, page: string) {
    await this.databaseService.removeAward(`${path}/${index}`);
    this.getData(page);

  }

  togglePage(page: string) {
    this.activePage = page;
    this.getData(page);
  }

}
