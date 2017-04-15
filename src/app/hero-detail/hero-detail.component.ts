import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';

import { states } from '../data-model';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  heroForm: FormGroup; // <--- heroForm is of type FormGroup
  states = states;

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }
// watchForm values as state property added
  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required], // <--- the FormControl called "name"
      street: '',
      city: '',
      state: '',
      zip: '',
      power: '',
      sidekick: ''
      
    });

  }

  ngOnInit() {
  }

}
