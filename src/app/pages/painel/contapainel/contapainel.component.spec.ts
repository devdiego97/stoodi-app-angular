import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContapainelComponent } from './contapainel.component';

describe('ContapainelComponent', () => {
  let component: ContapainelComponent;
  let fixture: ComponentFixture<ContapainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContapainelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContapainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
