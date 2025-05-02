import ChartComponent from "~/components/ChartComponent";
import ColumnChartComponent from "~/components/Columnchart";
import MixedChartComponent from "~/components/MixedChart";
import MixedChartLineColumnAreaComponent from "~/components/MixedChartLineColumnArea";
import MultiRadialBarChartComponent from "~/components/MultiRadialBarChart";
import PieChartComponent from "~/components/Piechart";
import RadarChartComponent from "~/components/Radarchart";
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
    <div className="mx-auto container space-y-8 mt-8">
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
          {
            key: "Columnchart",
            item: <ColumnChartComponent datas={datas} title="column chart" />,
          },
          { key: "Piechart", item: <PieChartComponent datas={datas} /> },
          { key: "Radarchart", item: <RadarChartComponent datas={datas} /> },
          { key: "Mixchart", item: <MixedChartComponent datas={datas} /> },
          {
            key: "Mixchart-v2",
            item: <MixedChartLineColumnAreaComponent datas={datas} />,
          },
          {
            key: "Radialchart",
            item: <MultiRadialBarChartComponent datas={datas} />,
          },
        ]}
      />
    </div>
  );
};

export default Textanalyzer;
