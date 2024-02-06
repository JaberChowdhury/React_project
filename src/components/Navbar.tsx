import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { ViewList, Home, AddCircle, Settings } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Transition from "./Transition";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ pb: .5 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          {pathname !== "/" && (
            <BottomNavigationAction label="Home" icon={<Home />} />
          )}
          <BottomNavigationAction label="ViewList" icon={<ViewList />} />
          {pathname !== "/add" && (
          <BottomNavigationAction label="AddCircle" icon={<AddCircle />} />
          )}
          <BottomNavigationAction
            onClick={handleClickOpen}
            label="Settings"
            icon={<Settings />}
          />
        </BottomNavigation>
      </Paper>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Chnages settings from
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
