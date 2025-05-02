import React, { useState } from "react";

type TabItem = {
  key: string | number;
  item?: React.ReactNode;
  default?: boolean;
};

type PropsType = {
  TabsData: TabItem[];
};

const Tabs = ({ TabsData }: PropsType) => {
  // Find the default tab key, fallback to the first tab if not found
  const defaultTab =
    TabsData.find((tab) => tab.default)?.key ?? TabsData[0]?.key;
  const [selected, setSelected] = useState(defaultTab);

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center">
        {TabsData.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelected(tab.key)}
            style={{
              fontWeight: selected === tab.key ? "bold" : "normal",
              borderBottom: selected === tab.key ? "2px solid #333" : "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px 16px",
            }}
          >
            {typeof tab.key === "string" ? tab.key : `Tab ${tab.key}`}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 16 }}>
        {TabsData.find((tab) => tab.key === selected)?.item}
      </div>
    </div>
  );
};

export default Tabs;
