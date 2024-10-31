import { CardFooter, makeStyles } from "@fluentui/react-components";
import Basicheaderitem from "./Basicheaderitem";
import useStore from "../store/textutils";

const useStyles = makeStyles({
  parentsCard: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    position: "relative",
    border: "1px solid black",
    padding: "4px",
  },
});

const Basicheader = () => {
  const styles = useStyles();

  const letterCount = useStore((state) => state.letterCount);
  const wordCount = useStore((state) => state.wordCount);
  const lineCount = useStore((state) => state.lineCount);
  const paragraphCount = useStore((state) => state.paragraphCount);
  const specialCharCount = useStore((state) => state.specialCharCount);
  const sentenceCount = useStore((state) => state.sentenceCount);

  return (
    <CardFooter className={styles.parentsCard}>
      <Basicheaderitem title="Letter" value={letterCount} />
      <Basicheaderitem title="Paragraph" value={paragraphCount} />
      <Basicheaderitem title="Word" value={wordCount} />
      <Basicheaderitem title="Special ch." value={specialCharCount} />
      <Basicheaderitem title="Sentence" value={sentenceCount} />
      <Basicheaderitem title="Line" value={lineCount} />
    </CardFooter>
  );
};

export default Basicheader;
