import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddBandComponent } from './add-band/add-band.component';
import { AddCarComponent } from './add-car/add-car.component';
import { DisplayElementComponent } from './display-element/display-element.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    AddBandComponent,
    AddCarComponent,
    DisplayElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
