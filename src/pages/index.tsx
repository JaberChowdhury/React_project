import { suraListSelector } from "@/features/suraList/suraListSlice";
import { useAppSelector } from "@/app/hook";
import { Grid } from "@mui/material";
import Suracard from "@/components/Suracard";
import { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";

const Home = () => {
  const { surah } = useAppSelector(suraListSelector);

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      {surah.map((sura) => {
        return <Suracard key={sura.sura_no} sura={sura} />;
      })}
    </Grid>
  );
};
const App = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);
  return (
    <>
      {load ? (
        <Home />
      ) : (
        <Box
          style={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default App;
