import { Button, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  button: {
    // border: "1px solid black",
    display: "flex",
    justifyContent: "space-between",

    "&hover": {
      // border: "1px solid black",
    },
    "&active": {
      // border: "1px solid black",
    },
  },
});

type propsType = {
  title: string;
  value: number;
};

const Basicheaderitem = ({ title = "Letter", value = 0 }: propsType) => {
  const styles = useStyles();
  return (
    <Button className={styles.button} appearance="outline">
      <b>{title} :</b> <span>{value}</span>
    </Button>
  );
};

export default Basicheaderitem;
