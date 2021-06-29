import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StatistiqueComponent } from './statistique/statistique.component';

@NgModule({
  declarations: [
    AppComponent,
    StatistiqueComponent
  ],
  imports: [ 
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
