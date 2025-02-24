import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConcourseComponent } from './card-concourse.component';

describe('CardConcourseComponent', () => {
  let component: CardConcourseComponent;
  let fixture: ComponentFixture<CardConcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardConcourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardConcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
