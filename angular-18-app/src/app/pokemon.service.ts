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
      },
      {
        id: 7,
        name: 'Carapuce',
        type: ['Eau'],
        imageUrl: this.getPokemonImage(7),
        description: 'La carapace de Carapuce ne sert pas qu’à le protéger. La forme ronde de sa carapace et ses rainures lui permettent d’être hydrodynamique.'
      },
      {
        id: 8,
        name: 'Carabaffe',
        type: ['Eau'],
        imageUrl: this.getPokemonImage(8),
        description: 'Carabaffe a une queue longue et robuste qui lui sert de fouet, et un canon à eau qui expulse des jets d’eau avec une force surprenante.'
      },
      {
        id: 9,
        name: 'Tortank',
        type: ['Eau'],
        imageUrl: this.getPokemonImage(9),
        description: 'Tortank est un Pokémon très intelligent. Si quelque chose l’intrigue, il l’inspecte en le mordant.'
      },
      {
        id: 10,
        name: 'Chenipan',
        type: ['Insecte'],
        imageUrl: this.getPokemonImage(10),
        description: 'Chenipan est doté d’un odorat extrêmement développé. Il est capable de détecter les feuilles dont il se nourrit, même si elles sont à plus de 1 km.'
      },
      {
        id: 11,
        name: 'Chrysacier',
        type: ['Insecte'],
        imageUrl: this.getPokemonImage(11),
        description: 'Chrysacier durcit son corps pour se protéger. Cependant, s’il est touché par une attaque physique, il devient mou.'
      },
      {
        id: 12,
        name: 'Papilusion',
        type: ['Insecte', 'Vol'],
        imageUrl: this.getPokemonImage(12),
        description: 'Papilusion est très populaire auprès des collectionneurs de Pokémon pour la beauté de ses ailes aux motifs chatoyants.'
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
