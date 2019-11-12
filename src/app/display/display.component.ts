import { Component, OnInit } from '@angular/core';
import {classes} from 'src/app/test';
@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  classes = classes;
  constructor() { }

  ngOnInit() {
  }

}
