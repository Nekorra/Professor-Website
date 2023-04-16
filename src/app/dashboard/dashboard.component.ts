import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { MatDialog } from '@angular/material/dialog';
import { AwardModalComponent } from '../modals/award-modal/award-modal.component';
import { ResearchModalComponent } from '../modals/research-modal/research-modal.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentData: any;
  length: number
  activePage: string;

  constructor(
    private databaseService: DatabaseService,
    private dialogRef: MatDialog
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
