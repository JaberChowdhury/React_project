import googleData from "./data.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

// Function to render nested values properly
const renderValue = (value: any) => {
  if (Array.isArray(value)) {
    return value.join(", "); // Display arrays as comma-separated values
  } else if (typeof value === "object" && value !== null) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {Object.entries(value).map(([nestedKey, nestedValue], index) => (
              <TableRow key={index}>
                <TableCell>{nestedKey}</TableCell>
                <TableCell>
                  {typeof nestedValue === "string" &&
                  nestedValue.startsWith("http") ? (
                    <a
                      href={nestedValue}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {nestedValue}
                    </a>
                  ) : (
                    renderValue(nestedValue)
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  return typeof value === "string" && value.startsWith("http") ? (
    <a href={value} target="_blank" rel="noopener noreferrer">
      {value}
    </a>
  ) : (
    value
  );
};

// Table body component
const Tbody = ({ data }) => (
  <TableBody
    sx={{
      my: 6,
    }}
  >
    {Object.entries(data).map(([key, value], index) => (
      <TableRow key={index}>
        <TableCell>{key}</TableCell>
        <TableCell>{renderValue(value)}</TableCell>
      </TableRow>
    ))}
  </TableBody>
);

const App = () => {
  const data = googleData.items || []; // Ensure `items` exist

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Table>
          {/* <thead>
          <TableRow>
          <TableHead>Key</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
          </thead> */}
          {data.length > 0 ? (
            data.slice(0, 100).map((item, id) => <Tbody data={item} key={id} />)
          ) : (
            <tbody>
              <TableRow>
                <TableCell>No data available</TableCell>
              </TableRow>
            </tbody>
          )}
        </Table>
      </div>{" "}
    </ThemeProvider>
  );
};

export default App;
