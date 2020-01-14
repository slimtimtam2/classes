import { Component, OnInit, Input } from '@angular/core';
// import test from 'src/assets/test.json';
import {classes} from 'src/app/test';
@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  @Input()className:String;
  @Input()classGrade:String;
  @Input()classDifficulty:String;
  @Input()classMajor:String;
  constructor() { 
    
  }

  ngOnInit() {
  }

}
