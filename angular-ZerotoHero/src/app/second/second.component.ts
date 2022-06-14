import { Component, OnInit } from '@angular/core';
import { ShapesService } from '../shapes.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  shape = '';
  color = '';
  shapeClass = '';

  constructor(private shapesService: ShapesService) { }

  ngOnInit(): void {
  }

  draw() {
    console.log("second component clicked...");
    this.shapeClass = this.shapesService.drawShape(this.shape, this.color);
  }

}
