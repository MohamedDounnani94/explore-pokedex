import IPokemon from '../models/Pokemon';
import PokemonDomain from '../_domains/PokemonDomain';

export default class PokemonService {
  /**
   * Service that returns a pokemon object by submitting name.
   * @param name The name of the pokemon eg. mewtwo.
   * @returns Object {@link IPokemon}.
   * @throws {@link IException}.
  */
  static async getPokemonByName(name: string): Promise<IPokemon> {
    // VALIDATION
    return PokemonDomain.getPokemonByName(name);
  }

  /**
   * Service that returns a pokemon object with a funny description by submitting name.
   * @param name The name of the pokemon eg. mewtwo.
   * @returns Object {@link IPokemon}.
   * @throws {@link IException}.
  */
  static async getTranslatedPokemonByName(name: string): Promise<IPokemon> {
    // VALIDATION
    return PokemonDomain.getTranslatedPokemonByName(name);
  }
}
