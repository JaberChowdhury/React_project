export interface COUNTRY {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: string[];
  area: number;
  borders: string[];
  callingCodes: string[];
  capital: string;
  cioc: string;
  currencies: Currency[];
  demonym: string;
  flag: string;
  gini: number;
  languages: Language[];
  latlng: [number, number];
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: RegionalBloc[];
  subregion: string;
  timezones: string[];
  topLevelDomain: string[];
  translations: Record<string, string>;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface RegionalBloc {
  acronym: string;
  name: string;
}
