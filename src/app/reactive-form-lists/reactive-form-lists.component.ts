import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/RX'
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

  heroes: Observable<Hero[]>;
  isLoading = false;
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }
  ngOnInit() {
  }
  getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService.getHeroes().finally(() => this.isLoading = false);
    this.selectedHero = undefined;
  }

  select(hero: Hero) { this.selectedHero = hero; }

//when selection change chang demo values
  selectDemo(demo: number) {
    demo = this.demo + 1;
    this.getHeroes();
}  
}
