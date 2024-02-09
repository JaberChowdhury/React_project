import { Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { themeSelector, setTheme } from "@/features/theme/themeSlice";
import { DarkMode, LightMode } from "@mui/icons-material";

const Dialoguecontents = () => {
  const dispatch = useAppDispatch();
  const { dark } = useAppSelector(themeSelector);

  console.log(dark, dispatch);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
        style={{
          width: "100%",
        }}
        onClick={() => dispatch(setTheme())}
      >
        {dark ? "Dark" : "Light"}
        {dark ? <LightMode /> : <DarkMode />}
      </Stack>
    </Stack>
  );
};

export default Dialoguecontents;
