import {Component, Input} from '@angular/core';
import {Pokemon} from "../pokemon.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @Input({required: true})
  pokemon!: Pokemon;
}
