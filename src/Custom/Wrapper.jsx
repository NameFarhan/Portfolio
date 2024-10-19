import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

function Wrapper({ children }) {
  const theme = useTheme()
  return (
    <>
      <Box sx={{ padding: '0 5vw' }}>
        {children}
      </Box>
    </>
  );
}

export default Wrapper;
