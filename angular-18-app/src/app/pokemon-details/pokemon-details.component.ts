import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Pokemon} from "../pokemon.model";
import {NgForOf, NgIf} from "@angular/common";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [NgIf, NgForOf, RouterLink],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
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
