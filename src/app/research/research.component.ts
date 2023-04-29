import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  researchData: any;
  researchIntro: any;
  images: any[] = [];
  readMoreList: any[] = [];
  storageRef: AngularFireStorageReference;
  searchResearch: any;

  constructor(
    private databaseService: DatabaseService,
    private afStorage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.getData();
  }
  
  async getData() {
    
    await this.databaseService.getData("research/research").then((res: any) => {
      this.researchData = res;
      this.researchData = this.researchData.flat();
    })

    this.putImageList();
    
  }

  putImageList() {
    for (let i = 0; i < this.researchData.length; i++) {
      this.readMoreList.push(false);
      if (this.researchData[i].title == "ASEEC") {
        this.researchIntro = this.researchData[i];
        this.researchData.splice(i, 1);
      }
      if(this.researchData[i].img_name != "" || this.researchData[i].img_name != null) {
        this.storageRef = this.afStorage.ref("research/" + this.researchData[i].img_name);
        this.storageRef.getDownloadURL().toPromise().then(url => {
          this.researchData[i].url = url;
        });
      }
    }
    console.log(this.researchData)
    console.log(this.readMoreList)
  }

  readMore(ind: number) {
    this.readMoreList[ind] = true;
  }

  readLess(ind: number) {
    this.readMoreList[ind] = false;
  }

}
