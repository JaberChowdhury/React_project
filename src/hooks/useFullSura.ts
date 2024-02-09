import type {Sura} from "@/types/bangla";

const useFullSura = (data:Sura[],position:string):Sura[] => {
  return data.filter(item => item.chapter === position.toString())
}

export default useFullSura;