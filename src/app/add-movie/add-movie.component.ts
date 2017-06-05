import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Output() movieCreated = new EventEmitter<{movieName: string}>();
  @ViewChild('inputMovieContent') inputMovieContent: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addMovie() {
    this.movieCreated.emit({
      movieName: this.inputMovieContent.nativeElement.value
    })
    this.inputMovieContent.nativeElement.value = '';
  }

}
