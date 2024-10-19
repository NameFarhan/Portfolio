import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          padding: "4vh 5vw",
          bgcolor: "#22222d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: {
              mobile: "11px",
              laptop: "12px",
            },
            textAlign:'center'
          }}
        >
          COPYRIGHT © 2024 ALL RIGHTS RESERVED
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
