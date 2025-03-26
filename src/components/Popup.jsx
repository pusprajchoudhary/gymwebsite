import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Popup({ open, handleClose, plantype, duration, price }) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formPayload = new FormData();
    formPayload.append("access_key", "0ffc373f-1fc5-4599-b649-ffe8d3e14728"); // Replace with your Web3Forms access key
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("message", `Plan Details: ${duration} ${plantype} - ${price}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const result = await response.json();
      if (result.success) {
        alert("Subscription request sent successfully!");
        handleClose();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send subscription request.");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box component="form" onSubmit={handleSubmit}>
        <DialogTitle>Subscribe to a Plan</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in your details to choose a subscription plan.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            name="name"
            label="Full Name"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            required
            margin="dense"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            required
            margin="dense"
            name="phone"
            label="Phone Number"
            type="tel"
            fullWidth
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
          />
          <div className="border-[1px] border-gray-300 py-4 px-4 mt-4 rounded-md">
            <p>Selected Plan: <span>{duration} {plantype} - {price}</span></p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">Cancel</Button>
          <Button type="submit" variant="contained" color="primary">Subscribe</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
