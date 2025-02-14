import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { TextField } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

// Function to render nested values properly
const renderValue = (value) => {
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
  <TableBody sx={{ my: 6 }}>
    {Object.entries(data).map(([key, value], index) => (
      <TableRow key={index}>
        <TableCell>{key}</TableCell>
        <TableCell>{renderValue(value)}</TableCell>
      </TableRow>
    ))}
  </TableBody>
);

const App = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setJsonInput(inputValue);

    try {
      const parsed = JSON.parse(inputValue);
      setParsedData(parsed);
      setError("");
    } catch (err) {
      setError("Invalid JSON input");
      setParsedData(null);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <TextField
          fullWidth
          multiline
          rows={4}
          value={jsonInput}
          onChange={handleInputChange}
          placeholder="Enter JSON data"
          error={!!error}
          helperText={error}
        />
        {parsedData && (
          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Key</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <Tbody data={parsedData} />
            </Table>
          </TableContainer>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
