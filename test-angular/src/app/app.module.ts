import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbhinavComponent } from './abhinav/abhinav.component';
import { RahulComponent } from './rahul/rahul.component';
import { Abhinav1Component } from './abhinav1/abhinav1.component';

@NgModule({
  declarations: [
    AppComponent,
    AbhinavComponent,
    RahulComponent,
    Abhinav1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
