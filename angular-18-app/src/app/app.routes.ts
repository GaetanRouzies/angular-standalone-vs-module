import {Routes} from '@angular/router';
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {PokemonDetailsComponent} from "./pokemon-details/pokemon-details.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'pokemons'},
  {path: 'pokemons', component: PokemonListComponent},
  {
    path: 'pokemons/:pokemonId',
    loadComponent: () => import('./pokemon-details/pokemon-details.component').then(m => m.PokemonDetailsComponent)
  }
];

