import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';

import { PokemonApiService } from './service/pokemon-api.service';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PokemonApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
