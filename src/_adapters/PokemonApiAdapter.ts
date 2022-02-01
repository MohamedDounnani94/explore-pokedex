import axios from 'axios';
import Exception from '../utility/Exception';
import logger from '../utility/logger';

const POKEMON_BASE_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon-species';

export default class PokemonAdapter {
  static async getPokemonByName(name: string): Promise<any> {
    const pokemonEndpoint = `${POKEMON_BASE_ENDPOINT}/${name}`;
    try {
      logger.debug(`Start to call the pokemon endpoint: ${pokemonEndpoint}`);
      const { data } = await axios.get(pokemonEndpoint);
      return data;
    } catch (exception) {
      if (exception.response.status === 404) {
        logger.error(`Error in api call with status ${exception.response.status}`);
        throw Exception.notFound('pokemon');
      } else {
        logger.error('Error in api call something goes wrong');
        throw Exception.generic();
      }
    }
  }
}
