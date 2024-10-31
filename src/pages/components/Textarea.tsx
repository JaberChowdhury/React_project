import { Field, Textarea, makeStyles } from "@fluentui/react-components";
import type { TextareaProps } from "@fluentui/react-components";
import useStore from "../store/textutils";

const useStyles = makeStyles({
  textarea: {
    border: "1px solid black",
    minHeight: "100px",
    "&:hover": {
      border: "1px solid black",
    },
    "&:active": {
      border: "1px solid black",
    },
  },
});

const Controlled = () => {
  const styles = useStyles();
  const setText = useStore((state) => state.setText);
  const updateCounts = useStore((state) => state.updateCounts);

  const onChange: TextareaProps["onChange"] = (_, data) => {
    setText(data.value);
    updateCounts();
  };
  const value = useStore((state) => state.text);

  return (
    <Field size="large" label="Type/Paste your text here">
      <Textarea className={styles.textarea} value={value} onChange={onChange} />
    </Field>
  );
};

export default Controlled;
