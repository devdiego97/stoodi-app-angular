import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoconcursoComponent } from './novoconcurso.component';

describe('NovoconcursoComponent', () => {
  let component: NovoconcursoComponent;
  let fixture: ComponentFixture<NovoconcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoconcursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoconcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
