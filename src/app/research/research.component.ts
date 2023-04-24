import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { ReadMoreOptions } from '@minni/read-more';
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
  storageRef: AngularFireStorageReference;

  readMoreOption: ReadMoreOptions = {
    readLessText: 'less', 
    readMoreText: 'more', 
    styles: {
      color: "#666",
    },
    classes: ['custom-style', 'blog-style']
  }


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
      console.log(this.researchData);
      this.researchIntro = this.researchData[0];
      this.researchData.shift();
    })

    this.putImageList();
    
  }

  putImageList() {
    console.log(this.researchData);
    for (let i = 0; i < this.researchData.length; i++) {
      if(this.researchData[i].img_name != "" || this.researchData[i].img_name != null) {
        this.storageRef = this.afStorage.ref("research/" + this.researchData[i].img_name);
        this.storageRef.getDownloadURL().toPromise().then(url => {
          this.researchData[i].url = url;
        });
      }
    }
    console.log(this.researchData)
  }

}
