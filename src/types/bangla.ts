
export type Sura = {
    chapter: string;
    verse: string;
    text: string;
  }


export interface InitialState {
  bangla: Sura[];
  isLoading: boolean;
  error: null | string;
}