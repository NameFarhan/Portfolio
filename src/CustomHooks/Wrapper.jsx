import { Box } from "@mui/material";

function Wrapper({ children }) {
  return (
    <>
      <Box sx={{ padding: '0 5vw' }}>
        {children}
      </Box>
    </>
  );
}

export default Wrapper;
