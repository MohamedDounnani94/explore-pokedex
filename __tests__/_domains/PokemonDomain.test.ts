import PokemonDomain from "../../src/_domains/PokemonDomain";
import PokemonRepository from '../../src/_ports/PokemonRepository'

jest.mock("../../src/_ports/PokemonRepository");

const pokemonRepository = PokemonRepository as jest.Mocked<typeof PokemonRepository>;

describe("PokemonDomain get methods: ", () => {

  test('Should return a Pokemon pedigree with standard description based on his/her name', async () => {

    const pokemonName = 'MeoTwo';

    const pokemon = {
      name: 'MeoTwo',
      description: 'It was created by a scientist',
      habitat: 'rare',
      isLegendary: true
    }

    pokemonRepository.getPokemonByName.mockResolvedValue(pokemon);

    const _pokemon = await PokemonDomain.getPokemonByName(pokemonName)
    expect(_pokemon).toMatchObject(pokemon)
  });

  test('Should return a Pokemon pedigree with funny description based on his/her name', async () => {
    const pokemonName = 'MeoTwo';

    const pokemon = {
      name: 'MeoTwo',
      description: 'It was created by a scientist',
      habitat: 'rare',
      isLegendary: true
    }

    pokemonRepository.getPokemonByName.mockResolvedValue(pokemon);

    const _pokemon = await PokemonDomain.getTranslatedPokemonByName(pokemonName)
    expect(_pokemon).toMatchObject(pokemon)
  });

});