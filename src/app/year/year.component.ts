import { Component, OnInit } from '@angular/core';
import { DataComponent } from 'src/app/data/data.component';
import {classes} from 'src/app/test';
@Component({
  selector: 'year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})


export class YearComponent implements OnInit {
classes=classes;
splitArrayOfClasses = [];
tara = '';


  constructor() { 
  }

  


  ngOnInit() {
    this.splitTheData()
  }

  splitTheData() {
    var years = [];
    const yearsAndSem=[];
    const finalArr = [];
    years.push(classes[0]);
    for (var i = 1; i < classes.length; i++){
      if (classes[i].year === classes[i-1].year){
        years.push(classes[i]);
      } else {
        yearsAndSem.push(years);
        years = [];
        years.push(classes[i]);
      }
      if (i === classes.length - 1){
        yearsAndSem.push(years);
        years = [];
      }
    }
    finalArr.push(yearsAndSem[0]);
    for (var i = 1; i < yearsAndSem.length;i++){
      years.push(yearsAndSem[i][0])
      for (var j = 1; j < yearsAndSem[i].length; j++){
        if (yearsAndSem[i][j].semester === yearsAndSem[i][j-1].semester){
          years.push(yearsAndSem[i][j]);
        } else {
          finalArr.push(years);
          years = [];
          years.push(yearsAndSem[i][j]);
        }
        if (j === yearsAndSem[i].length - 1){
          finalArr.push(years);
          years = [];
        }
      }
    }
    this.splitArrayOfClasses = finalArr;
    
  }


}
