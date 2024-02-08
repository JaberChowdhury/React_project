import { Button, Card, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { quotesSelcetor, fetchQuotes } from "@/features/quotes/quotesSlice";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useAppDispatch();
  const { quotes, isLoading, error } = useAppSelector(quotesSelcetor);

  const handleClick = () => {
    dispatch(fetchQuotes());
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>Quotes</div>
      <Button disabled={isLoading} onClick={handleClick} variant="contained">
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
      {error && <Typography>{JSON.stringify(error)}</Typography>}
    </motion.div>
  );
};

export default Home;
