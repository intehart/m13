import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../../shared';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}