import {
  Box,
  Card,
  CardContent,
  IconButton,
  Slider,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useStore from "./store/store";
import { useEffect } from "react";

const App = () => {
  const {
    password,
    isNumber,
    isEmoji,
    isLowerCase,
    isSpecialCharacter,
    password_length,
    isUpperCase,
    toggleNumber,
    toggleLowerCase,
    toggleEmoji,
    increasePasswordLength,
    decreasePasswordLength,
    toggleSpecialCharac,
    toggleUpperCase,
    updatePasswordLength,
    updatePassword,
  } = useStore();

  useEffect(() => {
    updatePassword();
  }, [
    isNumber,
    isEmoji,
    isLowerCase,
    isSpecialCharacter,
    password_length,
    isUpperCase,
  ]);
  return (
    <Stack
      sx={{
        width: "100%",
        minHeight: "100vh",
        background:
          "-webkit-linear-gradient(135deg, hsla(173, 89%, 70%, 1) 0%, hsla(196, 68%, 38%, 1) 100%)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: { sm: "100%", md: "80%", xl: "60%" },
          backgroundColor: "rgba(255,255,255,0.5)",
          backdropFilter: "blur(10px)",
        }}
      >
        <CardContent
          component={Stack}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Stack
            direction="row"
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Typography
              sx={{
                border: "1px solid black",
                minWidth: { sm: "100%", lg: "700px" },
                textAlign: "center",
                p: 1,
              }}
            >
              {password}
            </Typography>
            <IconButton color="primary" aria-label="add to shopping cart">
              <ContentCopyIcon />
            </IconButton>
          </Stack>
          <CardContent sx={{ width: "70%" }}>
            <Stack
              direction="row"
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Slider
                min={4}
                max={200}
                value={password_length}
                onChange={(_, v) => updatePasswordLength(v)}
              />
              <Stack direction="row">
                <IconButton onClick={decreasePasswordLength}>
                  <RemoveIcon />
                </IconButton>
                <input
                  style={{
                    textAlign: "center",
                  }}
                  type="number"
                  min="4"
                  max="200"
                  value={password_length}
                  onChange={(e) =>
                    updatePasswordLength(
                      Math.min(Math.max(Number(e.target.value), 4), 200)
                    )
                  }
                />
                <IconButton onClick={increasePasswordLength}>
                  <AddIcon />
                </IconButton>
              </Stack>
            </Stack>
          </CardContent>
          <CardContent>
            <Box
              sx={{
                border: "1px solid",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                justifyContent: "center",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>Number</Typography>
                <Switch onChange={toggleNumber} checked={isNumber} />
              </CardContent>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>Emoji</Typography>
                <Switch onChange={toggleEmoji} checked={isEmoji} />
              </CardContent>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>UpperCase</Typography>
                <Switch onChange={toggleUpperCase} checked={isUpperCase} />
              </CardContent>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>LowerCase</Typography>
                <Switch onChange={toggleLowerCase} checked={isLowerCase} />
              </CardContent>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography>Special Character</Typography>
                <Switch
                  onChange={toggleSpecialCharac}
                  checked={isSpecialCharacter}
                />
              </CardContent>
            </Box>
          </CardContent>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default App;
