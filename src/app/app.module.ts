import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './myfolder/add/add.component';
import { HomeComponent } from './myfolder/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
