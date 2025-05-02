import ChartComponent from "~/components/ChartComponent";
import Tabs from "~/components/Tabs";
import { Textarea } from "~/components/ui/textarea";
import useTextAnalyzer from "~/store/useTextAnalyzer";

const Textanalyzer = () => {
  const { text, setText, getCharacterFrequenciesArray } = useTextAnalyzer();

  const text_analysis_data = getCharacterFrequenciesArray();

  const datas = {
    count: text_analysis_data.map((item) => item.count),
    characters: text_analysis_data.map((item) => item.item),
  };
  return (
    <div className="mx-auto container">
      <Textarea
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="max-h-[200px] min-h-[200px] ring-2 border-2"
      />

      <Tabs
        TabsData={[
          {
            key: "Areachart",
            item: <ChartComponent datas={datas} />,
            default: true,
          },
          { key: "Columnchart", item: <ChartComponent datas={datas} /> },
          { key: "Piechart", item: <ChartComponent datas={datas} /> },
        ]}
      />
    </div>
  );
};

export default Textanalyzer;
