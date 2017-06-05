import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  elements = ['mazda6', 'mazda6', 'mazda6', 'mazda6', 'mazda6', 'mazda6', 'mazda6', 'mazda6', 'mazda6', 'mazda6', ];

  constructor() { }

  ngOnInit() {
  }

  onBandCreated(bandData: {bandName: string}) {
    this.elements.push(bandData.bandName)
  }

  onCarCreated(carData: {carName: string}) {
    this.elements.push(carData.carName);
  }

  onMovieCreated(movieData: {movieName: string}) {
    this.elements.push(movieData.movieName)
  }
}
