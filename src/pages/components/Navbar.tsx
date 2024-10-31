import { Card, makeStyles } from "@fluentui/react-components";

const useStyle = makeStyles({
  card: {
    position: "sticky",
    top: "4px",
    overflow: "hidden",
    zIndex: 100,
    backgroundColor: "#fff",
  },
  nav: {
    fontWeight: "bold",
  },
});

const Navbar = () => {
  const style = useStyle();

  return (
    <Card className={style.card}>
      <nav className={style.nav}>Text Analyser</nav>
    </Card>
  );
};

export default Navbar;
