import {Component, inject} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon.model";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  private pokemonService = inject(PokemonService);
  pokemons: Pokemon[] = this.pokemonService.getPokemons();
}
