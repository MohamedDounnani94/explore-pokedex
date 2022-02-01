import IPokemon from '../models/Pokemon';
import PokemonRepository from '../_ports/PokemonRepository';
import TranslationRepository from '../_ports/TranslationRepository';
import { TranslateAuthor } from '../models/Translation';

export default class PokemonDomain {
  static async getPokemonByName(name: string): Promise<IPokemon> {
    const lowerName = name.toLowerCase();
    return PokemonRepository.getPokemonByName(lowerName);
  }

  static async getTranslatedPokemonByName(name: string): Promise<IPokemon> {
    const lowerName = name.toLowerCase();
    const pokemon = await PokemonRepository.getPokemonByName(lowerName);

    if (pokemon.habitat === 'cave' || pokemon.isLegendary) {
      pokemon.description = await this.getDescription(TranslateAuthor.YODA, pokemon.description);
    } else {
      pokemon.description = await this.getDescription(TranslateAuthor.SHAKESPEARE, pokemon.description);
    }

    return pokemon;
  }

  static async getDescription(fromWho: string, description: string): Promise<string> {
    try {
      const translationResult = await TranslationRepository.getFunnyDescription(fromWho, description);
      return translationResult.contents.translated;
    } catch (err) {
      return description;
    }
  }
}
