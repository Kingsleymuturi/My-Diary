import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Diary } from '../diary'

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {

  newEntry = new Diary(0,"","",new Date);
  @Output() addItem = new EventEmitter<Diary>();
  saveEntry(){
    this.addItem .emit(this.newEntry);
      }
  constructor() { }

  ngOnInit() {
  }
}
