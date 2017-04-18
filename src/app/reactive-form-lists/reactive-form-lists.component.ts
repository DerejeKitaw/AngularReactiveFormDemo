import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import {Hero} from '../data-model'
import {HeroService} from '../hero.service'
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
  constructor(private heroService: HeroService) { }
  heroes: Observable<Hero[]>;
  ngOnInit() {
  }
//when selection change chang demo values
  selectDemo(demo: number) {
    demo = this.demo + 1;
}  
}
