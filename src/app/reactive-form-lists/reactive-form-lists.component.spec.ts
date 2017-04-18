import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormListsComponent } from './reactive-form-lists.component';

describe('ReactiveFormListsComponent', () => {
  let component: ReactiveFormListsComponent;
  let fixture: ComponentFixture<ReactiveFormListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
