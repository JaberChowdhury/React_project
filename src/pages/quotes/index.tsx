import { Button,Card, Container, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { quotesSelcetor, fetchQuotes } from "@/features/quotes/quotesSlice";

const Home = () => {
  const dispatch  = useDispatch()
  const { quotes, isLoading, error } = useSelector(quotesSelcetor);
  console.log({ quotes, isLoading, error });



  return(
  <div>
    <div>Quotes</div>
    <Button disabled={isLoading} onClick={()=>dispatch(fetchQuotes())} variant="contained">Fetch Quotes</Button>
    <Container>
    {!isLoading &&
      quotes?.map((data) => {
        return <Card
        sx={{
          marginTop: "9px",
          padding : "4px",
          marginBottom: "9px",
          border : "1px solid rgba(255,255,255,0.15)"
        }} 
        key={data.id}
        >
        <Typography 
        >{data.text}</Typography></Card>
      })}
    </Container>
  </div>
  )
};

export default Home;
