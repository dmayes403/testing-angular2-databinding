import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  @Output() carCreated = new EventEmitter<{carName: string}>();

  constructor() { }

  ngOnInit() {
  }

  addCar(carInput: HTMLInputElement) {
    this.carCreated.emit({
      carName: carInput.value
    })
    console.log('hello');
    carInput.value = '';
  }

}
