import { Component } from '@angular/core';
import { FormControl, FormGroup, Form } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  favouriteFood: string = 'Sushi';
  date: Date;
  foodOption: string;
  required: boolean = true;
  selectedCount=0;
  items: Array<string> = [];



  submit() {
    console.log({
      food: this.favouriteFood,
      date:
        this.date.getFullYear() +
        '-' +
        this.date.getMonth() +
        '-' +
        this.date.getDate(),
      option: this.foodOption,
      required: this.required,
    });
  }
}
