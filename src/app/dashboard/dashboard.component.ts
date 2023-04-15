import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { MatDialog } from '@angular/material/dialog';
import { AwardModalComponent } from '../modals/award-modal/award-modal.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  awardsData: any;
  length: number
  constructor(
    private databaseService: DatabaseService,
    private dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.databaseService.getData('honors/awards').then((data) =>{
      this.awardsData= data;
      this.length = this.awardsData.length
    })
  }

  openDialog() {
    const dialog = this.dialogRef.open(AwardModalComponent, {
      data : {
        length: this.length
      }
    });
    dialog.afterClosed().subscribe(() => {
      // Do stuff after the dialog has closed
      this.getData();
  });
    
  }

  async removeAward(index: number) {
    console.log(index);
    await this.databaseService.removeAward(`honors/awards/${index}`);
    this.getData();

  }

}
