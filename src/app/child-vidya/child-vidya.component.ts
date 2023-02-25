import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-vidya',
  templateUrl: './child-vidya.component.html',
  styleUrls: ['./child-vidya.component.css']
})
export class ChildVidyaComponent implements OnInit {
  // @Input() PtoC: any;
  // @Input() surname: any;
  // @Input() age: number | undefined;
  @Input() fatherName: any
  @Input() motherName: any
  @Input() childrenNames: any

  @Output() childData = new EventEmitter<string>();
   @Output() childData1  = new EventEmitter<any>();

  childName = 'Vidya';
  constructor() {

   }

  ngOnInit(): void {
    // this.childName = this.PtoC
  }

  onSubmit(data: any){
    // alert('Button Clicked')
    console.log(data)
    this.childData.emit(data);
    // this.childData1.emit(data.age)
  }


}
