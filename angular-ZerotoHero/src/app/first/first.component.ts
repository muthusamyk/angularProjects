import { Component, OnInit } from '@angular/core';
import { ShapesService } from '../shapes.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  shape = '';
  color = '';
  shapeClass = '';

  constructor(private shapesService: ShapesService) { }

  ngOnInit(): void {
  }

  draw() {
    console.log("first component clicked...");
    this.shapeClass = this.shapesService.drawShape(this.shape, this.color);
  }
}
