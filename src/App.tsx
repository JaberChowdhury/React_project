import {
  Button,
  Card,
  CardContent,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useExpenseForm from "./store/expense_form_handler";
import useExpenseStore from "./store/expense_store";

const App = () => {
  // Accessing state and actions from Zustand store
  const { title, cost, handleTitle, handleCost, handleClear } =
    useExpenseForm();
  const { expenses, addExpense, deleteExpense } = useExpenseStore();

  const handleSubmit = () => {
    addExpense({
      id: crypto.randomUUID(),
      title,
      cost: Number(cost),
      time:
        new Date().toLocaleDateString() +
        "    |    " +
        new Date().toLocaleTimeString(),
    });
    handleClear();
  };

  return (
    <Stack
      gap={5}
      direction="row"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexWrap: { xs: "wrap", sm: "nowrap" },
      }}
    >
      <Stack
        gap={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Card
          style={{
            width: "70%",
            zIndex: 100,
            padding: "10px",
            backdropFilter: "blur(90px)", // Adjust the blur level as needed
            background: "rgba(255, 255, 255, 0.5)", // Transparent white background
            borderRadius: "8px", // Optional: add rounded corners
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Expense Tracker
          </Typography>
          <CardContent>
            <InputLabel>Title</InputLabel>
            <TextField
              onChange={(e) => handleTitle(e.target.value)} // Update title
              value={title}
              type="text"
              placeholder="Type your title"
              fullWidth
              required
            />
            <InputLabel>Cost</InputLabel>
            <TextField
              onChange={(e) => handleCost(e.target.value)} // Update cost
              value={cost}
              type="number"
              placeholder="Enter your spending cost"
              fullWidth
              required
            />
            <Button
              disabled={!(title && cost)}
              onClick={handleSubmit}
              sx={{ width: "100%", margin: "50px 0 0 0" }}
              variant="contained"
            >
              Add
            </Button>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "72%",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography variant="h4">
              {Math.round(
                expenses.reduce(
                  (previousValue, currentValue) =>
                    previousValue + currentValue.cost,
                  0
                )
              )}{" "}
              tk
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      {expenses.length !== 0 && (
        <Card
          sx={{
            width: "50%",
            maxHeight: "90vh",
            overflowY: "scroll",
          }}
        >
          <CardContent>
            {expenses.map((expense, id) => (
              <Card
                sx={{
                  my: "5px",
                }}
                key={id}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "100%",
                      textAlign: "left",
                    }}
                    variant="h4"
                  >
                    {expense.title}
                  </Typography>
                  <Typography
                    sx={{
                      width: "100%",
                      textAlign: "left",
                    }}
                    variant="body2"
                  >
                    {expense.time}
                  </Typography>

                  <Stack
                    gap={4}
                    direction="row"
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      //border: "1px solid black",
                      p: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography variant="subtitle1">Cost :</Typography>
                    <Typography variant="body1">{expense.cost}tk</Typography>
                  </Stack>
                  <Button
                    onClick={() => deleteExpense(expense.id)}
                    sx={{ width: "100%" }}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      )}
    </Stack>
  );
};

export default App;
