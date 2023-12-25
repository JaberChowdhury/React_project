import { Container, Typography } from "@mui/material";

interface propsType {
  name: string;
  colors: { muiName: string; value: string }[];
}

const Box = ({ name, colors }: propsType) => {
  return (
    <Container
      sx={{
        backgroundColor: "#78909c",
        marginTop: "5px",
        marginBottom: "5px",
        paddingTop: "5px",
        paddingBottom: "5px",
      }}
    >
      <Typography variant="h5">{name}</Typography>
      <Container>
        {colors.map((color, id) => {
          // const reverseColros = colors.reverse()
          return (
            <Container
              key={id}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                //    color: JSON.parse(reverseColros[id].value),
                backgroundColor: JSON.parse(color.value),
                borderRadius: "10px",
                marginTop: "2px",
                marginBottom: "2px",
              }}
            >
              <Typography variant="h6">{color.muiName}</Typography>
              <Typography>{JSON.parse(color.value)}</Typography>
            </Container>
          );
        })}
      </Container>
    </Container>
  );
};

export default Box;
