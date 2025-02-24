import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursoIdComponent } from './concurso-id.component';

describe('ConcursoIdComponent', () => {
  let component: ConcursoIdComponent;
  let fixture: ComponentFixture<ConcursoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcursoIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcursoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
