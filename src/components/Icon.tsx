import { IoHomeSharp } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";
import { RiTodoLine } from "react-icons/ri";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { IoTrashBinSharp } from "react-icons/io5";
import { FaThemeisle } from "react-icons/fa6";



type propsType = {
  icon : string
}

const Icon = ({icon}:propsType) => {
  switch(icon){
    case "IoHomeSharp":
      return <IoHomeSharp />
    case "IoMdAddCircle":
      return <IoMdAddCircle />;
    case "FcTodoList":
      return <FcTodoList />
    case "RiTodoLine":
      return <RiTodoLine />
    case "RiDeleteBin3Fill":
      return <RiDeleteBin3Fill />
    case "IoTrashBinSharp":
      return <IoTrashBinSharp />
    case "FaThemeisle":
      return <FaThemeisle />
    default:
      return <IoHomeSharp />
  }
}

export default Icon;