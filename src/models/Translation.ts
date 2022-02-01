export enum TranslateAuthor {
  YODA = 'yoda',
  SHAKESPEARE = 'shakespeare',
}

export default interface ITranslation {
  translated: string;
  text: string;
  translation: string;
}