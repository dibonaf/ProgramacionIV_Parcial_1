import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionFuncion } from './seleccion-funcion';

describe('SeleccionFuncion', () => {
  let component: SeleccionFuncion;
  let fixture: ComponentFixture<SeleccionFuncion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionFuncion],
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionFuncion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
