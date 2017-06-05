import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-band',
  templateUrl: './add-band.component.html',
  styleUrls: ['./add-band.component.css']
})
export class AddBandComponent implements OnInit {
  @Output() bandCreated = new EventEmitter<{bandName: string}>();
  currentBand = '';

  constructor() { }

  ngOnInit() {
  }

  addBand() {
      this.bandCreated.emit({
        bandName: this.currentBand
      });
      this.currentBand = '';
  }

}
