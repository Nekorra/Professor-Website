import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import * as awesom from '@fortawesome/free-solid-svg-icons';
import { DatabaseService } from '../services/database.service';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mapMarker: any;
  building: any;
  mobile: any;
  email: any;
  birthday: any;
  badge: any;
  home: any;
  hidden: boolean = false;
  fundsData: any;
  searchFunds: any;
  totalFunds: any;
  storageRef: AngularFireStorageReference;
  
  constructor(
    private router: Router,
    private databaseService: DatabaseService,
    private afStorage: AngularFireStorage
  ) {
  }

  @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
    if(window.pageYOffset <= 100 )
     this.hidden = false;
    else
      this.hidden = true;
 }
  
  ngOnInit(): void {
    this.mapMarker = awesom.faMapMarker;
    this.building = awesom.faCity;
    this.email = awesom.faMailBulk;
    this.mobile = awesom.faMobile;
    this.birthday = awesom.faBirthdayCake;
    this.badge = awesom.faGraduationCap;
    this.home = awesom.faLaptopHouse;

    this.getData();

  }

  expand() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("expandButton");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
      btnText.style.fontSize = "15px";
      btnText.style.display = "inline";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
      btnText.style.display = "none";
    }
    
  }

  routeLogin() {
    this.router.navigate(['/login']);
  }

  async getData() {
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

    this.putFundingImageList()
  }

  putFundingImageList() {
    for (let i = 0; i < this.fundsData.length; i++) {
      if(this.fundsData[i].img_name != "" || this.fundsData[i].img_name != null) {
        this.storageRef = this.afStorage.ref("funding/" + this.fundsData[i].img_name);
        this.storageRef.getDownloadURL().toPromise().then(url => {
          this.fundsData[i].url = url;
        });
      }
    }
    console.log(this.fundsData)
  }

}
