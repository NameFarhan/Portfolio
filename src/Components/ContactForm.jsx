import { useTheme } from "@emotion/react";
import { Box, Grid2 } from "@mui/material";
import React from "react";
import { StyledTextField } from "../CustomHooks/TextField";


const ContactForm = () => {
  const theme = useTheme();
  
  return (
    <>
      {/* Container */}
      <Grid2
        container
        spacing={{
          mobile: 3,
          laptop: 4,
        }}
        sx={{ mt: '2rem' }}
      >
        {/* First Grid: Name TextField (Full Width) */}
        <Grid2
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
          size={{
            mobile: 12,
            tablet: 6,
          }}
        >
          <StyledTextField
            label="Name"
            variant="outlined"
            fullWidth
            InputLabelProps={{ style: { color: '#484950' } }} // Label color
          />
        </Grid2>

        {/* Second Grid: Your Email TextField */}
        <Grid2
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
          size={{
            mobile: 12,
            tablet: 6,
          }}
        >
          <StyledTextField
            label="Your Email"
            variant="outlined"
            fullWidth
            InputLabelProps={{ style: { color: '#484950' } }} // Label color
          />
        </Grid2>

        {/* Third Grid: Tell Us Your Requirements TextField (Full Width) */}
        <Grid2
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
          size={{
            mobile: 12,
            tablet: 12,
          }}
        >
          <StyledTextField  
            label="Tell Us Your Requirements"
            variant="outlined"
            fullWidth
            multiline
            rows={4} // Adjust number of rows as needed
            InputLabelProps={{ style: { color: '#484950' } }} // Label color
          />
        </Grid2>
      </Grid2>
    </>
  );
};

export default ContactForm;
