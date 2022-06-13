import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PokemonService } from '../../../src/app/basic/services/pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('getPokemon() debe traer info de bulbasaur si se le pasa su id', (done) => {
    service.getPokemon(1).subscribe(pokemon => {
      console.log(pokemon.name);
      expect(pokemon.name).toBe('bulbasaur');

      done(); // Espera a que se ejecute el servicio
    });
  });

  
});
