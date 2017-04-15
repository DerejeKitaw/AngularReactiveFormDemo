import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup} from '@angular/forms';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  /** FormControl:
   *   is a directive that allows to create and manage a FormControl instance directly.
   * FormControl constructor accepts three, optional arguments:
   *    the initial data value,
   *    an array of validators, and
   *    an array of async validators.
   */ 
  /**
   * create a FormControl called name.
   * It will be bound in the template to an HTML input box for the hero name.
   * This simple control doesn't have data or validators.
   * In real apps, most form controls have both.
   */
  
  heroForm = new FormGroup({
    name : new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
