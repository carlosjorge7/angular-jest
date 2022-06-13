import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '../../../src/app/basic/services/pokemon.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CharizardComponent } from '../../../src/app/basic/charizard/charizard.component';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compiled: HTMLElement;
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharizardComponent ],
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe de hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('debe mostrar un loading al inicio', () => {
    const h2 = compiled.querySelector('h2');
    expect(h2?.textContent).toContain('Loading ...');
  });

  test('debe cargar a charizard inmediatamente', () => {
    const mockPokemon = { 
      name: 'Charizardo', 
      sprites: {
        front_default: 'http://charizard.com/sprite.png'
      }
    }

    // SERVICE
    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6')
    expect(request.request.method).toBe('GET');
    request.flush(mockPokemon); // Que la peticion devuelve ese mpck

    fixture.detectChanges();

    // HTML
    const h3 = compiled.querySelector('h3');
    const img = compiled.querySelector('img');

    expect(h3?.textContent?.toLocaleLowerCase()).toContain(mockPokemon.name.toLocaleLowerCase());
    expect(img?.src).toBe(mockPokemon.sprites.front_default);
    expect(img?.alt).toBe(mockPokemon.name);

  });
});
