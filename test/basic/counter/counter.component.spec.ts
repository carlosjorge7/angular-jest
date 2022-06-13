import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../src/app/basic/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('incrementar() debe incrementar el cont en 1', () => {
    component.incrementar();
    expect(component.cont).toEqual(11);
  });

  test('decrementar() debe incrementar el cont en 1', () => {
    component.decrementar();
    expect(component.cont).toEqual(9);
  });

  test('hacer click en los botones debe de incrementar y decrementar en 1', () => {
    const botones = compiled.querySelectorAll('button');
    botones[0].click();
    expect(component.cont).toEqual(11);

    botones[1].click(); // 10
    botones[1].click(); // 9
    expect(component.cont).toEqual(9);
  });

  test('cambiar el cont debe actualizar la etiqueta h1', () => {
    component.incrementar();
    fixture.detectChanges(); // Esperamos a que fixture actualice el DOM

    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('11');
  })


});
