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
import { useEffect, useCallback, useMemo } from "react";

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

  const generatePassword = useCallback(() => {
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
      final_password += dataArray[random_number];
    }

    if (final_password !== password) {
      setPassword(final_password);
    }
    return final_password;
  }, [
    isNumber,
    isEmoji,
    isUpperCase,
    isLowerCase,
    isSpecialCharacter,
    numbers,
    emojis,
    uppercase,
    lowercase,
    specialChar,
    password_length,
    password,
    setPassword,
  ]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const handleSliderChange = useCallback(
    (e: Event, value: number | number[]) => {
      updatePasswordLength(Array.isArray(value) ? value[0] : value);
    },
    [updatePasswordLength]
  );

  const handleTextFieldChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updatePasswordLength(Number(e.target.value));
    },
    [updatePasswordLength]
  );

  const sliderSx = useMemo(
    () => ({
      justifyContent: "space-between",
      alignItems: "center",
      gap: 3,
    }),
    []
  );

  const boxSx = useMemo(
    () => ({
      border: "1px solid",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      justifyContent: "center",
    }),
    []
  );

  const cardContentSx = useMemo(
    () => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }),
    []
  );

  const typographySx = useMemo(
    () => ({
      textAlign: "center",
      border: "1px solid",
    }),
    []
  );

  const textFieldSx = useMemo(
    () => ({
      border: "1px solid",
    }),
    []
  );

  const stackSx = useMemo(
    () => ({
      direction: "row",
      sx: sliderSx,
    }),
    [sliderSx]
  );

  return (
    <Stack>
      <Typography variant="h6" sx={typographySx}>
        {password}
      </Typography>
      <Card>
        <CardContent>
          <CardContent>
            <Box>
              <Typography>Password length</Typography>
              <Stack direction="row" sx={sliderSx}>
                <Slider
                  onChange={handleSliderChange}
                  value={password_length}
                  min={4}
                  max={200}
                />
                <Button onClick={increasePasswordLength} variant="contained">
                  +
                </Button>

                <TextField
                  defaultValue={password_length}
                  sx={textFieldSx}
                  value={password_length}
                  onChange={handleTextFieldChange}
                  type="number"
                />
                <Button onClick={decreasePasswordLength} variant="contained">
                  -
                </Button>
              </Stack>
            </Box>
          </CardContent>
          <Box sx={boxSx}>
            <CardContent sx={cardContentSx}>
              <Typography>Number</Typography>
              <Switch checked={isNumber} onChange={toggleNumber} />
            </CardContent>
            <CardContent sx={cardContentSx}>
              <Typography>Emoji</Typography>
              <Switch checked={isEmoji} onChange={toggleEmoji} />
            </CardContent>
            <CardContent sx={cardContentSx}>
              <Typography>UpperCase</Typography>
              <Switch checked={isUpperCase} onChange={toggleUpperCase} />
            </CardContent>
            <CardContent sx={cardContentSx}>
              <Typography>LowerCase</Typography>
              <Switch checked={isLowerCase} onChange={toggleLowerCase} />
            </CardContent>
            <CardContent sx={cardContentSx}>
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
