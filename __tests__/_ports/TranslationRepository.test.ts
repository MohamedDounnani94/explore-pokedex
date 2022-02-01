import { TranslateAuthor } from "../../src/models/Translation";
import TranslationApiAdapter from "../../src/_adapters/TranslationApiAdapter";
import TranslationRepository from '../../src/_ports/TranslationRepository'

jest.mock("../../src/_adapters/TranslationApiAdapter");

const translationApiAdapter = TranslationApiAdapter as jest.Mocked<typeof TranslationApiAdapter>;

describe("TranslationRepository get methods: ", () => {

  test('Should return a Pokemon pedigree with standard description based on his/her name', async () => {

    const description = '';
    const fromWho = TranslateAuthor.YODA

    const response = {
      success: {
          total: 1
      },
      contents: {
          translated: "My beer,  hold",
          text: "Hold my beer",
          translation: "yoda"
      }
    }

    translationApiAdapter.getFunnyDescription.mockResolvedValue(response);

    const _result = await TranslationRepository.getFunnyDescription(fromWho, description)
    expect(_result).toMatchObject(response)
  });

}); 