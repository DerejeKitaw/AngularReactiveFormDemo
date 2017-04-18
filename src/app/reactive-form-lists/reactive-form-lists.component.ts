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
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
