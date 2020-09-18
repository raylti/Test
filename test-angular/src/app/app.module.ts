import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbhinavComponent } from './abhinav/abhinav.component';
import { RahulComponent } from './rahul/rahul.component';
import { Rahul1Component } from './rahul1/rahul1.component';
import { Abhinav1Component } from './abhinav1/abhinav1.component';
import { Abhinav3Component } from './abhinav3/abhinav3.component';

@NgModule({
  declarations: [
    AppComponent,
    AbhinavComponent,
    RahulComponent,
    Rahul1Component,
    Abhinav1Component,
    Abhinav3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
