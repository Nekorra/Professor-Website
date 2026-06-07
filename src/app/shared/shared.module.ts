import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { RevealDirective } from './reveal.directive';

@NgModule({
  declarations: [SiteLayoutComponent, RevealDirective],
  imports: [CommonModule, RouterModule],
  exports: [SiteLayoutComponent, RevealDirective],
})
export class SharedModule {}
