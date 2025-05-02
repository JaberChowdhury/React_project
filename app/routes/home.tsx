import React, { useState } from "react";
import ChartComponent from "~/components/ChartComponent";
import ColumnChartComponent from "~/components/Columnchart";
import PieChartComponent from "~/components/Piechart";
import MixedChartComponent from "~/components/MixedChart";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { Textarea } from "~/components/ui/textarea";

export default function Home() {
  // Motivational default text
  const [text, setText] = useState(
    "Every great achievement begins with the decision to try."
  );

  const [playground, setPlayground] = useState(false);
  // Generate chart data from text
  const getCharData = (input: string) => {
    const freq: Record<string, number> = {};
    for (const char of input.replace(/\s/g, "")) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return {
      count: Object.values(freq),
      characters: Object.keys(freq),
    };
  };

  const demoData = getCharData(text);

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center  dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 px-4 py-10">
      <div className="max-w-3xl w-full text-center space-y-6 mb-10">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-black via-slate-700 to-slate-400 dark:from-white dark:via-slate-300 dark:to-slate-600 bg-clip-text text-transparent">
          Text Action Suite
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground">
          Analyze, visualize, and transform your text with powerful utilities
          and beautiful charts.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <Button asChild size="lg" className="w-full md:w-auto">
            <Link to="/text-utils">Explore Text Utils</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full md:w-auto"
          >
            <Link to="/textanalyzer">Try Text Analyzer</Link>
          </Button>
        </div>
      </div>
      <div className="w-full max-w-2xl mb-10 flex justify-center items-center">
        {playground ? (
          <Textarea
            className="min-h-[120px] text-base shadow-md bg-white/80 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800"
            placeholder="Type or paste your text here to see live chart updates..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <Button onClick={() => setPlayground(true)}>Open Editor</Button>
        )}
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-lg p-4 flex flex-col items-center">
          <h2 className="font-bold text-xl mb-2">Area Chart</h2>
          <ChartComponent datas={demoData} />
          <p className="mt-2 text-sm text-muted-foreground text-center">
            Visualize trends and patterns in your text data.
          </p>
        </div>
        <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-lg p-4 flex flex-col items-center">
          <h2 className="font-bold text-xl mb-2">Column Chart</h2>
          <ColumnChartComponent datas={demoData} title="Sample Column Chart" />
          <p className="mt-2 text-sm text-muted-foreground text-center">
            Compare character frequencies at a glance.
          </p>
        </div>
        <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-lg p-4 flex flex-col items-center">
          <h2 className="font-bold text-xl mb-2">Pie Chart</h2>
          <PieChartComponent datas={demoData} title="Sample Pie Chart" />
          <p className="mt-2 text-sm text-muted-foreground text-center">
            See the distribution of your text data.
          </p>
        </div>
        <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl shadow-lg p-4 flex flex-col items-center">
          <h2 className="font-bold text-xl mb-2">Mixed Chart</h2>
          <MixedChartComponent datas={demoData} title="Sample Mixed Chart" />
          <p className="mt-2 text-sm text-muted-foreground text-center">
            Multiple chart types for deeper insights.
          </p>
        </div>
      </div>
      <div className="mt-12 text-center text-muted-foreground text-xs">
        &copy; {new Date().getFullYear()} Text Action Suite &mdash; Empowering
        your text analysis journey.
      </div>
    </div>
  );
}
