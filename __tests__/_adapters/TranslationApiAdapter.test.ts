import axios from 'axios'
import { TranslateAuthor } from "../../src/models/Translation";
import TranslationApiAdapter from "../../src/_adapters/TranslationApiAdapter";

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("TranslationAdapter get methods: ", () => {

  test('Should return a Translation object', async () => {

    const description = 'Hold my beer';
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

    mockedAxios.post.mockImplementationOnce(() => Promise.resolve({
      data: {
        ...response  
      }
    }));

    const translation = await TranslationApiAdapter.getFunnyDescription(fromWho, description)
    expect(translation.contents.translation).toEqual(fromWho)
    expect(translation.contents.text).toEqual(description)
    expect(translation.contents.translated).toEqual('My beer,  hold')
    expect(translation.success.total).toEqual(1)
  });

  test('Should return a handle rejection', async () => {

    const description = '';
    const fromWho = TranslateAuthor.YODA

    mockedAxios.post.mockImplementationOnce(() => Promise.reject({
      status: 500
    }));

    try {
      await TranslationApiAdapter.getFunnyDescription(fromWho, description)
    } catch (expection) {
      expect(expection.code).toEqual("500")
    }
  });

});