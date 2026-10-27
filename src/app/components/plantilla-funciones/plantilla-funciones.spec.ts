import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantillaFunciones } from './plantilla-funciones';

describe('PlantillaFunciones', () => {
  let component: PlantillaFunciones;
  let fixture: ComponentFixture<PlantillaFunciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillaFunciones],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantillaFunciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
