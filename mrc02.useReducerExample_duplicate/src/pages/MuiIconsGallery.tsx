import * as material from "@mui/icons-material";
import muiIcons from "../Hooks/muiIcons";

export default function MuiIconsGallery() {
  console.log(material);
  return (
    <div>
      <div>MuiIconsGallery</div>
      <div className="w-full gap-1 flex justify-center items-center flex-wrap relative">
        {muiIcons.map((icon, index) => {
          return (
            <div
              className=" rounded shadow-md  flex justify-center items-center"
              key={index}
            >
              {icon}
            </div>
          );
        })}
      </div>
    </div>
  );
}
