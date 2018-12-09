import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../service/pokemon-api.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemons = [];
  myArray = [];

  constructor(private pokemonApi: PokemonApiService) { }

  ngOnInit() {
    this.pokemonApi.getPokemon()
    .subscribe(data => {
      const pokeObj = data.results;
        pokeObj.forEach(pokemon => {
          this.pokemons = this.makeArray(pokemon);
          console.log(pokemon.name);
        })
      }
    )
  }

  makeArray(pokemon) {
    pokemon._pokemonName = pokemon;
    this.myArray.push(pokemon._pokemonName);
    return this.myArray;
  }

}