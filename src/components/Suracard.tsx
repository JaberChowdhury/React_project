import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Stack,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { PlaylistPlay, Discount } from "@mui/icons-material";
import type { Sura } from "@/types/Suralist";
import { useTheme } from "@mui/material/styles";
// import Glassbox from "./Glassbox"

interface propsType {
  sura: Sura;
}

const Suracard = ({ sura }: propsType) => {
  const theme = useTheme();
  return (
    <Grid sx={{ width: "100%" }} item xs={2} sm={4} md={4}>
      <Link
        style={{
          textDecoration: "none",
        }}
        to={`/sura/${sura.sura_no}`}
      >
        <Card style={{ width: "100%" }}>
          <CardContent>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={1}
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: theme.palette.warning.main }}
              >
                {sura.sura_no}
              </Typography>
            </Stack>
            <Divider style={{ marginBottom: "10px" }} variant="middle" />
            <Typography variant="h6" sx={{ color: theme.palette.info.main }}>
              সূরা {sura.sura_name}
            </Typography>
            <Typography variant="h6" sx={{ color: theme.palette.success.main }}>
              Sura {sura.eng_name}
            </Typography>
            <Divider style={{ marginTop: "10px" }} variant="middle" />
            <CardActions sx={{ width: "100%" }}>
              <Stack
                sx={{ width: "100%", fontWeight: "bold" }}
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={1}
              >
                <Divider orientation="vertical" flexItem />
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.info.dark,
                    }}
                  >
                    Ayat :
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.success.main,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    variant="body2"
                  >
                    {sura.total_ayat}
                    <PlaylistPlay />
                  </Typography>
                </Stack>
                <Divider orientation="vertical" flexItem />
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.info.dark,
                    }}
                  >
                    Para :
                  </Typography>{" "}
                  <Typography
                    sx={{
                      color: theme.palette.success.main,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    variant="body2"
                  >
                    {sura.para}
                    <Discount fontSize="small" />
                  </Typography>
                </Stack>
              </Stack>
              <Divider orientation="vertical" flexItem />
            </CardActions>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default Suracard;
