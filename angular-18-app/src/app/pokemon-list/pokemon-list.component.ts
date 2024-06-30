import {Component, inject} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {PokemonCardComponent} from "../pokemon-card/pokemon-card.component";
import {NgForOf} from "@angular/common";
import {Pokemon} from "../pokemon.model";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent, NgForOf],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  private pokemonService = inject(PokemonService);
  pokemons: Pokemon[] = this.pokemonService.getPokemons();
}
