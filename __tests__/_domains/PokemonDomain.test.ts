import PokemonDomain from '../../src/_domains/PokemonDomain';
import PokemonRepository from '../../src/_ports/PokemonRepository';
import TranslationRepository from '../../src/_ports/TranslationRepository';

jest.mock('../../src/_ports/PokemonRepository');
jest.mock('../../src/_ports/TranslationRepository');

const pokemonRepository = PokemonRepository as jest.Mocked<typeof PokemonRepository>;
const translationRepository = TranslationRepository as jest.Mocked<typeof TranslationRepository>;

describe("PokemonDomain getPokemonByName: ", () => {

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

});

describe("PokemonDomain getTranslatedPokemonByName: ", () => {

  test('Should return a Pokemon pedigree with funny description from yoda', async () => {
    const pokemonName = 'mewtwo';
  
    const pokemon = {
      name: 'mewtwo',
      description: 'It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.',
      habitat: 'rare',
      isLegendary: true
    }

    const translationResult = {
      success: {
        total: 1,
      },
      contents: {
        translated: 'Created by a scientist after years of horrific gene splicing and dna engineering experiments,  it was.',
        text: 'It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.',
        translation: 'yoda'
      }
    }
  
    pokemonRepository.getPokemonByName.mockResolvedValue(pokemon);
    translationRepository.getFunnyDescription.mockResolvedValue(translationResult);
  
    const _pokemon = await PokemonDomain.getTranslatedPokemonByName(pokemonName)
    expect(_pokemon.description).toEqual(translationResult.contents.translated)
  });

  test('Should return a Pokemon pedigree with funny description from shakespeare', async () => {
    const pokemonName = 'MeoTwo';

    const pokemon = {
      name: 'ditto',
      description: "Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy.",
      habitat: 'marte',
      isLegendary: false
    }

    const translationResult = {
      success: {
        total: 1
      },
      contents: {
        translated: "Capable of copying an foe's genetic code to instantly transform itself into a duplicate of the foe.",
        text: "Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy.",
        translation: 'shakespeare'
      }
    }

    pokemonRepository.getPokemonByName.mockResolvedValue(pokemon);
    translationRepository.getFunnyDescription.mockResolvedValue(translationResult);

    const _pokemon = await PokemonDomain.getTranslatedPokemonByName(pokemonName)
    expect(_pokemon.description).toEqual(translationResult.contents.translated)
  });

  test('Should return a Pokemon pedigree with the same description', async () => {
    const pokemonName = 'MeoTwo';

    const pokemon = {
      name: 'mewtwo',
      description: 'It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.',
      habitat: 'rare',
      isLegendary: true
    }

    pokemonRepository.getPokemonByName.mockResolvedValue(pokemon);
    translationRepository.getFunnyDescription.mockImplementationOnce(() => Promise.reject({
      status: 500
    }));

    const _pokemon = await PokemonDomain.getTranslatedPokemonByName(pokemonName)
    expect(_pokemon.description).toEqual(pokemon.description)
  });
});
