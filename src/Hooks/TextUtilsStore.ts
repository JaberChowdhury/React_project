import { useReducer } from "react";
import TextUtilsWorker from "./TextUtilsWorker";

type initialStateType = { value: string };
type TEXTAREAVALUEType = { type: "TEXTAREAVALUE"; payload?: { text: string } };
type MAKEARRAYType = { type: "MAKEARRAY"; payload?: { text: string } };
type CLEARType = { type: "CLEAR"; payload?: { text: string } };
type REMOVESPACEType = { type: "REMOVESPACE"; payload?: { text: string } };
type ONLYNUMBERSType = { type: "ONLYNUMBERS"; payload?: { text: string } };
type ONLYSTRINGType = { type: "ONLYSTRING"; payload?: { text: string } };
type UPPERCASEType = { type: "UPPERCASE"; payload?: { text: string } };
type LOWERCASEType = { type: "LOWERCASE"; payload?: { text: string } };
type RANDOMType = { type: "RANDOM"; payload?: { text: string } };
type REVERSEARRAYType = { type: "REVERSEARRAY"; payload?: { text: string } };
type MAKEDOUBLEType = { type: "MAKEDOUBLE"; payload?: { text: string } };
type REVERSESTRINGType = { type: "REVERSESTRING"; payload?: { text: string } };
type UNIQUESTRINGType = { type: "UNIQUESTRING"; payload?: { text: string } };

type ACTIONType =
  | TEXTAREAVALUEType
  | MAKEARRAYType
  | CLEARType
  | REMOVESPACEType
  | ONLYNUMBERSType
  | ONLYSTRINGType
  | UPPERCASEType
  | LOWERCASEType
  | RANDOMType
  | REVERSEARRAYType
  | MAKEDOUBLEType
  | REVERSESTRINGType
  | UNIQUESTRINGType;

const TextUtilsStore = () => {
  const initialState = { value: "" };
  const ACTION = {
    TEXTAREAVALUE: "TEXTAREAVALUE",
    MAKEARRAY: "MAKEARRAY",
    CLEAR: "CLEAR",
    REMOVESPACE: "REMOVESPACE",
    ONLYNUMBERS: "ONLYNUMBERS",
    ONLYSTRING: "ONLYSTRING",
    UPPERCASE: "UPPERCASE",
    LOWERCASE: "LOWERCASE",
    RANDOM: "RANDOM",
    REVERSEARRAY: "REVERSEARRAY",
    MAKEDOUBLE: "MAKEDOUBLE",
    REVERSESTRING: "REVERSESTRING",
    UNIQUESTRING: "UNIQUESTRING",
  };

  const reducer = (state: initialStateType, action: ACTIONType) => {
    const worker = new TextUtilsWorker(state.value);
    switch (action.type) {
      case ACTION.TEXTAREAVALUE:
        return { value: action.payload ? action.payload.text : "" };

      case ACTION.MAKEARRAY:
        return { value: worker.makeArray() };

      case ACTION.CLEAR:
        return { value: "" };

      case ACTION.REMOVESPACE:
        return { value: worker.removeSpace() };

      case ACTION.ONLYNUMBERS:
        return { value: worker.onlyNumbers() };

      case ACTION.ONLYSTRING:
        return { value: worker.onlyString() };

      case ACTION.UPPERCASE:
        return { value: worker.uppercase() };

      case ACTION.LOWERCASE:
        return { value: worker.lowercase() };

      case ACTION.RANDOM:
        return { value: worker.randomWord() };

      case ACTION.REVERSEARRAY:
        return { value: worker.reverseArray() };

      case ACTION.MAKEDOUBLE:
        return { value: worker.makeDouble() };

      case ACTION.REVERSESTRING:
        return { value: worker.reverseString() };

      case ACTION.UNIQUESTRING:
        return { value: worker.uniqueString() };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};

export default TextUtilsStore;
