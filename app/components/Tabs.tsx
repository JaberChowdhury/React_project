import React, { useState } from "react";

type propsType = {
  Tabsdata: string;
};

const Tabs = ({ TabsData }: propsType) => {
  const [selected, setSelected] = useState(TabsData.default);
  return <div>{}</div>;
};

export default Tabs;
