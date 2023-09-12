import * as React from "react";
import Div from "../components/Div";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const data: string[] = [
    "Search",
    "TodoApp",
    "TextUtils",
    "Counter",
    "Colors",
    "IconsGallery",
  ];
  return (
    <Div className="w-full min-h-screen flex justify-center items-center flex-col relative bg-slate-100">
      <Div className="w-4/5 top-4 p-2 rounded bg-slate-400 text-slate-900 font-bold absolute text-center shadow-md">
        Hyperloop
      </Div>

      <Div className="w-full gap-2 flex justify-center items-center flex-wrap p-2 relative">
        {data?.map((d, i) => {
          return (
            <motion.div
              className="w-28 h-28 overflow-hidden rounded  relative bg-slate-500 shadow-md"
              key={i}
              initial={{
                scaleY: 0,
              }}
              animate={{
                scaleY: 1,
                transition: {
                  delay: 0.09 * i,
                },
              }}
            >
              <Link
                to={`/${d}`}
                className="w-full h-full flex justify-center items-center"
              >
                {d}
              </Link>
            </motion.div>
          );
        })}
      </Div>
    </Div>
  );
}

export default React.memo(Home);
