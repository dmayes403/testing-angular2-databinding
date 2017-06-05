import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-element',
  templateUrl: './display-element.component.html',
  styleUrls: ['./display-element.component.css']
})

export class DisplayElementComponent implements OnInit {
  @Input() singleElement: string

  constructor() { }

  ngOnInit() {
  }

}
