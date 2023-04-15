import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AwardsComponent } from './awards/awards.component';
import { PublicationsComponent } from './publications/publications.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";
import { ResearchComponent } from './research/research.component';
import { StudentsComponent } from './students/students.component';

import { environment } from 'src/environments/environment.prod';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatDialogModule } from '@angular/material/dialog';
import { AwardModalComponent } from './modals/award-modal/award-modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AwardsComponent,
    PublicationsComponent,
    ResearchComponent,
    StudentsComponent,
    LoginComponent,
    DashboardComponent,
    AwardModalComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
