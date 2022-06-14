import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Itemslist {
  name: string;
  type: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angular-ZerotoHero';
  inputValue?: string;
  btnDisabled: boolean = false;
  buttonDisabled: boolean = true;
  numbers: number[] = Array(50);
  selctedNumber: number = 0;

  appItems = [
    {name: 'apple', type: 'fruits'},
    {name: 'pear', type: 'animals'},
    {name: 'green', type: 'colors'},
    {name: 'banana', type: 'fruits'},
    {name: 'lion', type: 'animals'},
    {name: 'blue', type: 'colors'},
    {name: 'lemon', type: 'fruits'},
    {name: 'tiger', type: 'animals'},
    {name: 'red', type: 'colors'}
  ]
  filteredItems:Itemslist[] =[];
  finalItems:Itemslist[] = this.appItems;

  selectedItems!: Itemslist;

  // ! this is for optional parameter declaration place
  // ? this is for optional parameter get value place

  @ViewChild('myInput', { static: true }) myCustomInput?: ElementRef<HTMLElement>; 

  ngOnInit() {
    this.myCustomInput?.nativeElement.focus();
  }

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

  colors() {
    this.filteredItems = this.appItems.filter((obj) => {
      return obj.type === 'colors';
    });
    this.finalItems = this.filteredItems;
  }

  fruits() {
    this.filteredItems = this.appItems.filter((obj) => {
      return obj.type === 'fruits';
    });
    this.finalItems = this.filteredItems;
  }

  animals() {
    this.filteredItems = this.appItems.filter((obj) => {
      return obj.type === 'animals';
    });
    this.finalItems = this.filteredItems;
  }

  receiveItemDetails(val: any) {
    console.log(val);
    this.selectedItems = val;
  }


}
