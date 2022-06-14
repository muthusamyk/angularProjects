import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Itemslist {
  name: string;
  type: string
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() childItems!: Itemslist[];

  @Output() sendItemDetails = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  itemClicked(val: Itemslist) {
    console.log(val);
    this.sendItemDetails.emit(val);
  }

}
