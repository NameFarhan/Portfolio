


import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Box } from '@mui/material';

export default function SimpleAlert() {
  return (
    <Box sx={{mt:'1.5rem'}}>
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Your message has been sent successfully !
    </Alert>
    </Box>
  );
}
