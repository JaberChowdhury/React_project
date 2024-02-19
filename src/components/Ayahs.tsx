import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
  translation: string;
  footnotes: string;
}

interface propsType {
  data: Ayah[];
  name: string;
}

const Ayahs = ({ data, name }: propsType) => {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        {data.map((ayah: Ayah, index: number) => {
          return (
            <div
              key={index}
              className="w-full p-3 border border-slate-200 my-4 text-right"
            >
              <CardTitle className="w-full text-left">
                {ayah.numberInSurah}
              </CardTitle>
              <CardTitle className="leading-loose p-3 border border-slate-200 my-4">
                {ayah.text}
              </CardTitle>
              <CardTitle className="leading-loose p-3 border border-slate-200 my-4">
                {ayah.translation}
              </CardTitle>

              {ayah.footnotes && (
                <CardDescription className="my-4 leading-loose text-left">
                  {ayah.footnotes}
                </CardDescription>
              )}

              <div className="w-full grid grid-cols-3 gap-2 [&>*]:border [&>*]:border-slate-200">
                <CardDescription>Ruku : {ayah.ruku}</CardDescription>
                <CardDescription>Juz : {ayah.juz}</CardDescription>
                <CardDescription>Manzil : {ayah.manzil}</CardDescription>
                <CardDescription>HQ : {ayah.hizbQuarter}</CardDescription>
                <CardDescription className={ayah.sajda ? "text-green-400" : ""}>
                  Sajda : {ayah.sajda ? "true" : "false"}
                </CardDescription>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Ayahs;
