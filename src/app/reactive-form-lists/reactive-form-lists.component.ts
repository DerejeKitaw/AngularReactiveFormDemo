import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'reactive-form-lists',
  templateUrl: './reactive-form-lists.component.html',
  styleUrls: ['./reactive-form-lists.component.css']
})
export class ReactiveFormListsComponent implements OnInit {
//Lists of reactive form
  demos: string[] = [
    'Just a FormControl',
    'FormControl in a FormGroup',
    'Simple FormBuilder group',
    'Group with multiple controls',
    'Nested FormBuilder group',
    'PatchValue',
    'SetValue',
    'FormArray',
    'Final'].map(n=>n+ ' Demo');
  
  final = this.demos.length; //Demo length
  demo = this.final   //Current demo
  constructor() { }

  ngOnInit() {
  }
//when selection change chang demo values
  selectDemo(demo: number) {
    demo = this.demo + 1;
}  
}
