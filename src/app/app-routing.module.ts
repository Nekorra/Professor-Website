import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SiteLayoutComponent } from './shared/site-layout/site-layout.component';
import { HomeComponent } from './home/home.component';
import { AwardsComponent } from './awards/awards.component';
import { PublicationsComponent } from './publications/publications.component';
import { ResearchComponent } from './research/research.component';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CvComponent } from './cv/cv.component';
import { AuthGuard } from './guards/auth.guard';
import { Eec170Component } from './eec170/eec170.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'awards', component: AwardsComponent },
      { path: 'publications', component: PublicationsComponent },
      { path: 'research', component: ResearchComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'cv', component: CvComponent },
      { path: 'eec170', component: Eec170Component },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TranslateModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
