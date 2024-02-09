export type Sura = {
  sura_no: string;
  sura_name: string;
  para: string;
  total_ayat: string;
  eng_name: string;
};

export interface InitialState {
  surah: Sura[];
}
