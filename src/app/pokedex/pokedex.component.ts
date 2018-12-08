import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from '../service/pokemon-api.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor(private pokemonApi: PokemonApiService) { }

  ngOnInit() {
    this.pokemonApi.getPokemon()
      .subscribe(data => {
        console.log(data);
        }
      )
  }

}