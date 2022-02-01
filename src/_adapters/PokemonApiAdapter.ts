import IPokemon from '../models/Pokemon';
import logger from '../utility/logger';

const POKEMON_BASE_ENDPOINT = 'https://pokeapi.co';

export default class PokemonAdapter {
  /**
   * Adapter function that returns a pokemon object.
   * @param name The name of the pokemon {@link IPokemon}.
   * @returns Object {@link IPokemon}.
   * @throws {@link IException}.
  */
  static async getPokemonByName(name: string): Promise<IPokemon> {
    this.getPokemonNameByRoute(name);

    return {
      name: 'MeoTwo',
      description: 'It was created by a scientist',
      habitat: 'rare',
      isLegendary: true,
    };
  }

  /**
   * Adapter function that submit a request to an endpoint to get a pokemon.
   * @param route aka the pokemon name, that you want to call to get the pokemon informations.
   * @throws {@link IException}.
  */
  static async getPokemonNameByRoute(route: string): Promise<any> {
    const pokemonEndpoint = `${POKEMON_BASE_ENDPOINT}/${route}`;
    logger.debug({ pokemonEndpoint });
  }
}
