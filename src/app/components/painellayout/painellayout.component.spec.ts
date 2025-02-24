import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainellayoutComponent } from './painellayout.component';

describe('PainellayoutComponent', () => {
  let component: PainellayoutComponent;
  let fixture: ComponentFixture<PainellayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainellayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainellayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
