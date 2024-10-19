


import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

 export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#0fb551',
  color: '#fff',
  fontSize: '14px',
  fontWeight: 800,
  borderRadius: 0,
  '&:hover': {
    backgroundColor: '#0a933e',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));

