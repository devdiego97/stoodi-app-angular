import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursosPainelComponent } from './concursos-painel.component';

describe('ConcursosPainelComponent', () => {
  let component: ConcursosPainelComponent;
  let fixture: ComponentFixture<ConcursosPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcursosPainelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcursosPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
