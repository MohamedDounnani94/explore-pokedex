import axios from 'axios'
import PokemonApiAdapter from "../../src/_adapters/PokemonApiAdapter";

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("PokemonAdapter get methods: ", () => {

  test('Should return a Pokemon pedigree with standard description based on his/her name', async () => {

    const pokemonName = 'mewtwo';

    const response = {
      data: {
        name: 'MeoTwo',
        flavor_text_entries: [ { flavor_text: "Mewtwo is a Pokémon that was created by genetic\n"+
        "manipulation. However, even though the scientific power\n" +
        "of humans created this Pokémon’s body, they failed to\n" +
        "endow Mewtwo with a compassionate heart."} ],
        habitat: { name: 'rare' },
        is_legendary: true
      }
    }

    mockedAxios.get.mockResolvedValue(response);

    const data = await PokemonApiAdapter.getPokemonByName(pokemonName)
    expect(data).toHaveProperty('name')
    expect(data).toHaveProperty('habitat')
    expect(data).toHaveProperty('is_legendary')
    expect(data).toHaveProperty('flavor_text_entries')
  });

  test('Should return an Expection when name is not submitted', async () => {

    const pokemonName = '';


    const mockedResponse = {
      response: {
        status: 404
      }
    }

    mockedAxios.get.mockImplementationOnce(() => Promise.reject(mockedResponse));

    try {
      await PokemonApiAdapter.getPokemonByName(pokemonName)
    } catch (expection) {
      expect(expection.code).toEqual('404')
    }
  });

  test('Should return an Expection when something beyond our comprehension goes wrong', async () => {

    const pokemonName = '';


    const mockedResponse = {
      response: {
        status: 500
      }
    }

    mockedAxios.get.mockImplementationOnce(() => Promise.reject(mockedResponse));

    try {
      const data = await PokemonApiAdapter.getPokemonByName(pokemonName)
    } catch (expection) {
      expect(expection.code).toEqual('500')
    }
  });
});