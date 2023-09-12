import { ExpandMore, CancelOutlined, Send } from "@mui/icons-material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Item from "./Item";
import Selected from "./Selected";
import Button from "./Button";

interface dataType {
  label: string;
  value: string | number;
}
interface propsType {
  data: dataType[];
}
interface itemsType {
  uuid: string;
  value: string;
}

export function Options({ data }: propsType) {
  const [isExpend, setIsExpend] = useState(false);
  const [initialValue, setInitialValue] = useState("");
  const [selectedItems, setSelectedItems] = useState<itemsType[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInitialValue = (value: string) => {
    setInitialValue(value);
    if (value.length !== 0) {
      setSelectedItems([
        ...selectedItems,
        {
          uuid: crypto.randomUUID(),
          value,
        },
      ]);
    } else {
      console.log("length is 0");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInitialValue(e.target.value);
    setInputValue(e.target.value);
  };

  const getUuid = (uuid: string) => {
    const filteredItems = selectedItems.filter((item) => {
      return item.uuid !== uuid;
    });
    setSelectedItems(filteredItems);
  };

  const handleClick = () => {
    setIsExpend(!isExpend);
  };
  const maxHeight = data.length * 42;
  const containerVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  };
  return (
    <>
      <h1 className="w-4/5 p-2 rounded bg-slate-400 shadow-md text-center absolute top-10">
        <strong>Custom Selector</strong>
      </h1>
      <Selected getUuid={getUuid} items={selectedItems} />
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        className="w-[95%] p-2 bg-slate-50 shadow-md flex justify-between items-center border relative border-slate-900 rounded "
      >
        <input
          type="text"
          value={initialValue}
          onChange={handleChange}
          placeholder="Select Something..."
          className="border-none ring-none active:border-none active:ring-none"
        />

        <div className="flex">
          <div
            className={initialValue.length !== 0 ? "" : "hidden"}
            onClick={() => {
              handleInitialValue(inputValue);
            }}
          >
            <Button>
              <Send />
            </Button>
          </div>
          <Button handleClick={handleClick}>
            {isExpend ? <CancelOutlined /> : <ExpandMore />}
          </Button>
        </div>

        <div
          style={{ height: isExpend ? maxHeight : 0 }}
          className="w-full overflow-hidden px-2 top-14 left-0 bg-slate-50 rounded flex justify-center items-center flex-col shadow-md absolute"
        >
          {data?.map((d, i) => (
            <Item
              key={i}
              handleInitialValue={handleInitialValue}
              label={d.label}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}
