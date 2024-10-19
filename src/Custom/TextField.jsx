import { TextField } from "@mui/material";
import { styled } from "@mui/system";



 export const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#14141e', // Set background color
      borderRadius: '5px',
      '& fieldset': {
        border: 'none', // Remove outline/border
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
    },
    '& .MuiInputBase-input': {
      color: '#ffffff', // Set text color to white for contrast
    },
    '& .MuiInputBase-input::placeholder': {
      color: '#484950', // Placeholder color
      opacity: 1, // Ensure placeholder color is not faded
    },
  }));