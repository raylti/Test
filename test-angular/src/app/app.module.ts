import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbhinavComponent } from './abhinav/abhinav.component';
import { RahulComponent } from './rahul/rahul.component';
import { Rahul1Component } from './rahul1/rahul1.component';

@NgModule({
  declarations: [
    AppComponent,
    AbhinavComponent,
    RahulComponent,
    Rahul1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
