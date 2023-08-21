import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { List, ListItem, ListItemText } from "@mui/material";

const information = [
  "password is: At least 12 characters long but 14 or more is better.",
  "A combination of uppercase letters, lowercase letters, numbers, and symbols.",
  "Not a word that can be found in a dictionary or the name of a person, character, product, or organization. Significantly different from your previous passwords.",
  "Easy for you to remember but difficult for others to guess.",
  "Consider using a memorable phrase like 6MonkeysRLooking^.",
];

const PasswordFormDialog = ({ falgToOpen, closeFromUserProfilePage }) => {
  const [password, setPassword] = React.useState("");

  const handleClose = () => {
    console.log("password = ", password);
    closeFromUserProfilePage();
  };

  const handleInputChange = (ev) => {
    setPassword(ev.target.value);
    //onChange(ev.target.id, ev.target.value);
  };

  const handelBlurChange = () => {};

  return (
    <div>
      <Dialog open={falgToOpen} onClose={handleClose}>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogTitle>
          Password security starts with creating a strong password. A strong
        </DialogTitle>
        <DialogContent>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {information &&
              information.map((value, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemText primary={`${value}`} />
                </ListItem>
              ))}
          </List>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Enter New Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={handleInputChange}
            onBlur={handelBlurChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PasswordFormDialog;
