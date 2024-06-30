import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Pokemon} from "../pokemon.model";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent {
  private activatedRoute = inject(ActivatedRoute);
  private pokemonService = inject(PokemonService);
  pokemon!: Pokemon;

  constructor() {
    this.activatedRoute.params.subscribe(params => {
      const pokemonId = +params['pokemonId'];
      this.pokemon = this.pokemonService.getPokemon(pokemonId);
    });
  }
}
