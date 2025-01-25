import {
  Box,
  Button,
  Card,
  CardContent,
  Slider,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import useStore from "./store";
import { useEffect } from "react";

const App = () => {
  const {
    password,
    password_length,
    isNumber,
    isEmoji,
    isLowerCase,
    isUpperCase,
    isSpecialCharacter,
    toggleNumber,
    toggleLowerCase,
    toggleSpecialCharac,
    toggleEmoji,
    toggleUpperCase,
    increasePasswordLength,
    decreasePasswordLength,
    updatePasswordLength,
    specialChar,
    uppercase,
    lowercase,
    emojis,
    numbers,
    setPassword,
  } = useStore();

  console.log({
    password,
    password_length,
    isNumber,
    isEmoji,
    isLowerCase,
    isUpperCase,
    isSpecialCharacter,
    toggleNumber,
    toggleLowerCase,
    toggleSpecialCharac,
    toggleEmoji,
    toggleUpperCase,
    increasePasswordLength,
    decreasePasswordLength,
    updatePasswordLength,
    specialChar,
    uppercase,
    lowercase,
    emojis,
    numbers,
    setPassword,
  });

  const generatePassword = () => {
    let dataArray: string[] = [];
    if (isNumber) {
      dataArray = [...dataArray, ...numbers];
    }
    if (isEmoji) {
      dataArray = [...dataArray, ...emojis];
    }
    if (isUpperCase) {
      dataArray = [...dataArray, ...uppercase];
    }
    if (isLowerCase) {
      dataArray = [...dataArray, ...lowercase];
    }
    if (isSpecialCharacter) {
      dataArray = [...dataArray, ...specialChar];
    }
    let final_password = "";

    for (let index = 0; index < password_length; index++) {
      const random_number = Math.floor(Math.random() * dataArray.length);
      console.log({ random_number });
      final_password += dataArray[Math.floor(Math.random() * dataArray.length)];
      console.log(dataArray[random_number]);
    }
    setPassword(final_password);
    return final_password;
  };

  useEffect(() => {
    generatePassword();
  }, []);
  return (
    <Stack>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", border: "1px solid" }}
      >
        {password}
      </Typography>
      <Card>
        <CardContent>
          <CardContent>
            <Box>
              <Typography>Password length</Typography>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Slider
                  onChange={(e) => updatePasswordLength(Number(e))}
                  value={password_length}
                  min={4}
                  // step={1}
                  max={200}
                />
                <Button onClick={increasePasswordLength} variant="contained">
                  +
                </Button>

                <TextField
                  defaultValue={password_length}
                  sx={{ border: "1px solid" }}
                  value={password_length}
                  onChange={(e) => updatePasswordLength(Number(e.target.value))}
                  type="number"
                />
                <Button onClick={decreasePasswordLength} variant="contained">
                  -
                </Button>
              </Stack>
            </Box>
          </CardContent>
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
              <Switch checked={isNumber} onChange={toggleNumber} />
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>Emoji</Typography>
              <Switch checked={isEmoji} onChange={toggleEmoji} />
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>UpperCase</Typography>
              <Switch checked={isUpperCase} onChange={toggleUpperCase} />
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>LowerCase</Typography>
              <Switch checked={isLowerCase} onChange={toggleLowerCase} />
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
                checked={isSpecialCharacter}
                onChange={toggleSpecialCharac}
              />
            </CardContent>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default App;
