import { motion } from "framer-motion";
import { CancelOutlined } from "@mui/icons-material";

interface itemsType {
  uuid: string;
  value: string;
}

interface propsTypes {
  items: itemsType[];
  getUuid: (uuid: string) => void;
}

export default function Selected({ items, getUuid }: propsTypes) {
  const containerVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  };

  const handleClick = (uuid: string) => {
    getUuid(uuid);
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        className={`w-[95%] ${
          items.length !== 0 ? "" : "hidden"
        } p-2 bg-slate-100 shadow-md my-10 relative rounded`}
      >
        <div>{items.length} item selected</div>
        <div className="w-full bg-slate-200 p-1 gap-2 h-full flex items-center flex-wrap relative">
          {items?.map((item, index) => (
            <motion.p
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { delay: 0.02 * index },
              }}
              className="px-2 flex active:scale-[0.6] justify-between items-center text-2xl hover:shadow-md border border-slate-900 rounded"
              key={item.uuid}
            >
              {item.value}
              <CancelOutlined
                onClick={() => handleClick(item.uuid)}
                sx={{ fontSize: 20 }}
              />
            </motion.p>
          ))}
        </div>
      </motion.div>
    </>
  );
}
