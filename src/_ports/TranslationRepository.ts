import { ITranslatorResponse } from '../models/Translation';
import TranslationApiAdapter from '../_adapters/TranslationApiAdapter';

export default class TranslationRepository {
  static async getFunnyDescription(fromWho: string, description: string): Promise<ITranslatorResponse> {
    return TranslationApiAdapter.getFunnyDescription(fromWho, description);
  }
}
