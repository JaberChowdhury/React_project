import { Button, Card, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { quotesSelcetor, fetchQuotes } from "@/features/quotes/quotesSlice";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  const { quotes, isLoading, error } = useSelector(quotesSelcetor);
  console.log({ quotes, isLoading, error });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>Quotes</div>
      <Button
        disabled={isLoading}
        onClick={() => dispatch(fetchQuotes())}
        variant="contained"
      >
        Fetch Quotes
      </Button>

      {!isLoading &&
        quotes?.map((data) => {
          return (
            <Card
              sx={{
                marginTop: "9px",
                padding: "4px",
                marginBottom: "9px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
              key={data.id}
            >
              <Typography>{data.text}</Typography>
            </Card>
          );
        })}
    </motion.div>
  );
};

export default Home;
