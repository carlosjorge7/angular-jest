import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-charizard',
  templateUrl: './charizard.component.html'
})
export class CharizardComponent implements OnInit {

  charizard: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(6)
      .subscribe(pokemon => {
        this.charizard = pokemon;
        console.log(pokemon)
      })
  }

}
