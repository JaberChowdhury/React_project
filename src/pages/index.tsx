import { Box, List, ListItem, ListItemText, Grid, Stack, Container,Typography } from "@mui/material";
import {useTheme} from "@mui/material/styles"
import {Home} from "@mui/icons-material"


const Index = () => {
  
  const theme = useTheme()
  console.log({theme})
  
  
  
  return (
    <Box>
<Stack
  sx={{
    minHeight: "100vh"
  }}
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={3}
>
         <Typography sx={{fontWeight: "bold",  color : theme.palette.info.main }} variant="h2">Notebook</Typography>
         <Typography sx={{color : theme.palette.text.primary, textAlign: "center"}}>A fully type safe notebook with search functionality and keyword support !!</Typography>
      </Stack>
      <Stack
  sx={{
    minHeight: "90vh"
  }}
      >
      <Container>
         <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Key features
          </Typography>
            <List dense={true}>
                <ListItem>
                    <Home />
                  <ListItemText
                    primary="Single-line item"
                   >This is realy awesome</ListItemText>
                </ListItem>
            </List>
        </Grid>
      </Container>
      </Stack>
    </Box>
  );
};

export default Index;
