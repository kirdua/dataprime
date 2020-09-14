import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const ContactUs = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Contact Us
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">CONTACT US</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Contact Type
          </DialogContentText>
          <Select fullWidth>
            <MenuItem selected value="">
              <em>Choose</em>
            </MenuItem>
            <MenuItem value={'email'}>Email</MenuItem>
            <MenuItem value={'phone'}>Phone</MenuItem>
            <MenuItem value={'sms'}>Text</MenuItem>
            </Select>
            <DialogContentText>
            Type Message
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            placeholder="Message"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button  variant="contained" onClick={handleClose} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactUs;
