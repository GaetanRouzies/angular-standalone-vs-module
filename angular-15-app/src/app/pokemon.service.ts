import {Injectable} from '@angular/core';
import {Pokemon} from "./pokemon.model";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getPokemons(): Pokemon[] {
    return [
      {
        id: 1,
        name: 'Bulbizarre',
        type: ['Plante', 'Poison'],
        imageUrl: this.getPokemonImage(1),
        description: 'Au début de sa vie, il se nourrit des nutriments accumulés dans la graine sur son dos. Cela lui permet de grandir.'
      },
      {
        id: 2,
        name: 'Herbizarre',
        type: ['Plante', 'Poison'],
        imageUrl: this.getPokemonImage(2),
        description: 'Plus il s’expose au soleil, plus il emmagasine d’énergie, ce qui permet au bourgeon sur son dos de se développer.'
      },
      {
        id: 3,
        name: 'Florizarre',
        type: ['Plante', 'Poison'],
        imageUrl: this.getPokemonImage(3),
        description: 'Ce Pokémon est capable de transformer la lumière du soleil en énergie. Il est donc encore plus fort en été.'
      },
      {
        id: 4,
        name: 'Salamèche',
        type: ['Feu'],
        imageUrl: this.getPokemonImage(4),
        description: 'La flamme au bout de sa queue représente sa vitalité. Quand Salamèche n’est pas au meilleur de sa forme, elle faiblit.'
      },
      {
        id: 5,
        name: 'Reptincel',
        type: ['Feu'],
        imageUrl: this.getPokemonImage(5),
        description: 'En agitant sa queue enflammée, il peut élever la température ambiante de manière exponentielle et ainsi tourmenter ses adversaires.'
      },
      {
        id: 6,
        name: 'Dracaufeu',
        type: ['Feu', 'Vol'],
        imageUrl: this.getPokemonImage(6),
        description: 'Quand Dracaufeu s’énerve réellement, la flamme au bout de sa queue devient bleue.'
      }
    ];
  }

  getPokemon(id: number): Pokemon {
    const pokemons = this.getPokemons();
    return pokemons.find(pokemon => pokemon.id === id)!;
  }

  private getPokemonImage(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
}
