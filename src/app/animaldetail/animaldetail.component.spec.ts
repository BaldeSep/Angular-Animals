import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaldetailComponent } from './animaldetail.component';

describe('AnimaldetailComponent', () => {
  let component: AnimaldetailComponent;
  let fixture: ComponentFixture<AnimaldetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaldetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
