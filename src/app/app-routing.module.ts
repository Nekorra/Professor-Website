import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home/home.component';
import { AwardsComponent } from './awards/awards.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'home', component: HomeComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TranslateModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
