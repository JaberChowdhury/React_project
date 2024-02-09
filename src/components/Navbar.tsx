import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";
import Glassbox from "./Glassbox";
import { useTheme } from "@mui/material/styles";
import { Menu, Cancel } from "@mui/icons-material";
import { useState } from "react";
import Transition from "./Transition";
import Dialoguecontents from "./Dialoguecontents";

const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
    handleClickOpen();
  };

  return (
    <Glassbox
      style={{
        padding: "5px",
        position: "sticky",
        top: "10px",
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: theme.palette.info.main, fontWeight: "bold" }}
        >
          QuranDB
        </Typography>
        <div onClick={handleClick}>{open ? <Cancel /> : <Menu />}</div>
      </nav>

      <Glassbox>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          sx={{
            background: "transparent",
            backgroundColor: "transparent",
          }}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle sx={{ minWidth: "300px" }}>Menu</DialogTitle>
          <DialogContent>
            <Dialoguecontents />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Glassbox>
    </Glassbox>
  );
};

export default Navbar;
