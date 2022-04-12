import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ZerotoHero';
  inputValue?: string;
  btnDisabled: boolean = false;
  buttonDisabled: boolean = true;
  numbers: number[] = Array(50);
  selctedNumber: number = 0;

  onSubmit() {
    if(this.inputValue == "submitted") {
      this.btnDisabled = true;
    }
    else {
      this.btnDisabled = false;
    }
  }

  clickedNumber(value:number) {
    this.selctedNumber = value;
    this.buttonDisabled = false;
  }

  clear() {
    this.buttonDisabled = true;
    this.selctedNumber = 0;
  }
}
