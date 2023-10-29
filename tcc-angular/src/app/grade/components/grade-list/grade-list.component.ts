import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { Grade } from '../../model/grade';


@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.scss']
})
export class GradeListComponent implements OnInit{

  @Input() grade: Grade[] = [];
  @Output() add = new EventEmitter(false)
  @Output() view = new EventEmitter(false)
  @Output() remove = new EventEmitter(false)


  readonly displayedColumns = ['idcliente','nome','email','acoes'];

  constructor() { }

  ngOnInit(): void { }

  onAdd() {
    this.add.emit(true);
  }

  onView(grade: Grade) {
    this.view.emit(grade);
  }

  onDelete(grade: Grade) {
    this.remove.emit(grade);
  }

}
