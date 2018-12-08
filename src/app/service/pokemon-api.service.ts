import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient ) { }

  getPokemon() {
    return this.httpClient.get<any>(this.url);
  }
}

