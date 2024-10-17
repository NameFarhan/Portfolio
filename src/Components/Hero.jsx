import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";
import Heroimage from '../Images/herotest.png'
const Hero = () => {
  const theme = useTheme();
  return (
    <>
      <Grid2
        display="flex"
        justifyContent="center"
        alignItems="center"
        container
        bgcolor="#1b1b27f7"
        p="2rem 0 0 0"
      >
        <Grid2
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-duration="900"
          display="flex"
          alignItems="center"
          justifyContent="center"
          item
          size={{
            mobile: 12,
            laptop: 6,
          }}
        >
          <Box sx={{ padding: "25vh 0" }}>
            <Typography
              sx={{
                fontWeight: "800",
                fontSize: {
                  mobile: "30px",
                  laptop: "40px",
                },
                color: "#fff",
                letterSpacing: "2px",
              }}
            >
              I'm Farhan Ali
            </Typography>
            <Typography
              sx={{
                padding: "10px 10px",
                backgroundColor: "#36c270",
                mt: ".5rem",
                color: "#fff",
                fontWeight: "600",
                borderRadius: "2px",
                letterSpacing: "1px",
                display: "inline-block",
              }}
            >
              Fontened Web Developer
            </Typography>
          </Box>
        </Grid2>

        {/* Image Grid */}
        <Grid2
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-duration="900"
          display={{
            mobile: "none",
            laptop: "flex",
          }}
          alignItems="center"
          justifyContent="center"
          item
          size={{
            mobile: 12,
            laptop: 6,
          }}
        >
          <Box
            component="img"
            sx={{
              height: "50%",
              width: "50%",
              objectFit:'cover'
            }}
            alt="Hero image"
            src={Heroimage}
          />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Hero;
