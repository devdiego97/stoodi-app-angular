import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursospainelComponent } from './cursospainel.component';

describe('CursospainelComponent', () => {
  let component: CursospainelComponent;
  let fixture: ComponentFixture<CursospainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursospainelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursospainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
