import { useTheme } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import React from "react";

const Services = () => {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: "#14141e", color: "#fff", padding: "5vh 5vw" }}>
      <Typography
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-duration="900"
        data-aos-once="true"
        sx={{
          fontSize: {
            mobile: "25px",
            laptop: "35px",
          },
          fontWeight: "800",
          textAlign: "center",
        }}
      >
        SERVICES
      </Typography>
      <Typography
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-duration="900"
        data-aos-once="true"
        sx={{
          color: "#4c4d54",
          fontSize: {
            mobile: "14px",
            laptop: "12px",
          },
          lineHeight: "1.5", // Optional: improve readability
          margin: "1rem auto 2rem auto",
          textAlign: "center",
        }}
      >
        Transforming Ideas into Engaging Web Experiences
      </Typography>

      {/* container  */}
      <Grid2
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-duration="900"
        data-aos-once="true"
        display="flex"
        justifyContent="center"
        alignItems="center"
        container
        spacing={{
          mobile:2,
          laptop:4
        }}
      >
        <Grid2
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          size={{
            mobile: 12,
            tablet: 6,
            laptop: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <CodeIcon
              sx={{ color: "#3c7050", width: "100px", height: "auto" }}
            />
            <Typography
              sx={{
                fontSize: {
                  mobile: "16px",
                  lapop: "20px",
                },
                color: "#fff",
                fontWeight: "800",
                letterSpacing:'1px'
              }}
            >
              WEB DEVELOPMENT
            </Typography>
            <Typography
              sx={{
                color: "#4c4d54",
                fontSize: {
                  mobile: "14px",
                  laptop: "12px",
                },
                lineHeight: "1.5", // Optional: improve readability
                margin: "1rem auto 2rem auto",
                textAlign: "center",
              }}
            >
              I specialize in building dynamic, user-friendly websites that adapt to all devices. Let’s transform your ideas into visually appealing online experiences.
            </Typography>
          </Box>
        </Grid2>

        <Grid2
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          size={{
            mobile: 12,
            tablet: 6,
            laptop: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <SpeedOutlinedIcon
              sx={{ color: "#3c7050", width: "100px", height: "auto" }}
            />
            <Typography
              sx={{
                fontSize: {
                  mobile: "16px",
                  lapop: "20px",
                },
                color: "#fff",
                fontWeight: "800",
                letterSpacing:'1px'
              }}
            >
              PERFORMANCE OPTIMAZATION
            </Typography>
            <Typography
              sx={{
                color: "#4c4d54",
                fontSize: {
                  mobile: "14px",
                  laptop: "12px",
                },
                lineHeight: "1.5", // Optional: improve readability
                margin: "1rem auto 2rem auto",
                textAlign: "center",
              }}
            >
              I focus on maximizing website performance to ensure faster load times and smoother interactions. Optimize your site to keep users engaged and improve SEO rankings.
            </Typography>
          </Box>
        </Grid2>

        <Grid2
          display="flex"
          justifyContent="center"
          alignItems="center"
          item
          size={{
            mobile: 12,
            tablet: 6,
            laptop: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <ApiOutlinedIcon
              sx={{ color: "#3c7050", width: "100px", height: "auto" }}
            />
            <Typography
              sx={{
                fontSize: {
                  mobile: "16px",
                  lapop: "20px",
                },
                color: "#fff",
                fontWeight: "800",
                letterSpacing:'1px'
              }}
            >
              API INTEGRATIONS
            </Typography>
            <Typography
              sx={{
                color: "#4c4d54",
                fontSize: {
                  mobile: "14px",
                  laptop: "12px",
                },
                lineHeight: "1.5", // Optional: improve readability
                margin: "1rem auto 2rem auto",
                textAlign: "center",
              }}
            >
              I provide robust API integration solutions that allow different applications to communicate effectively. Enhance your project’s functionality and user experience with seamless data exchange.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Services;
