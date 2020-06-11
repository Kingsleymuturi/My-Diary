import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  title = 'diary';
  diaries:Diary[] = [
   new Diary (1,'Childrens home visit','Go to visit langata childrens home',new Date(2020,6,12)),
   new Diary (2,'Check-up','Go to the hospital for a check-up',new Date(2020,7,14)),
   new Diary (3,'Work-out','Go to the gym for monthly work-out',new Date(2020,6,10)),
   new Diary (4,'Graduation','Finally graduate from Moringa Core',new Date(2020,8,9)),  
  ];
  newDiaryEntry(item){
    let goalLength = this.diaries.length;
    item.id = goalLength-1;
    item.createdOn = new Date(item.createdOn)
    this.diaries.unshift(item)
  }
  toggle(index){
    this.diaries[index].displayInfo = !this.diaries[index].displayInfo;
  }
  deleteItem(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.diaries[index].name}?`)
      if(toDelete){
        this.diaries.splice(index,1);
      }
      
    }
  }
  constructor() { }

  ngOnInit() {
  }

}