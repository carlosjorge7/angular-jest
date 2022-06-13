import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(id: number): Observable<any>{
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
