import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db-assignment',
  templateUrl: './db-assignment.component.html',
  styleUrls: ['./db-assignment.component.css']
})
export class DbAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string = 'vidya'
  changedName:string= ''
}
