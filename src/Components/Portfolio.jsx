import { Box, Grid2, Link, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import project1 from "../Images/project1.png";
import project2 from "../Images/project2.png";
import project3 from "../Images/project3.png";
import project4 from "../Images/project4.png";
import project5 from "../Images/project5.png";

const Portfolio = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          padding: "5vh 5vw",
          bgcolor: "#1b1b27f7",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
          }}
        >
          PORTFOLIO
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
          }}
        >
          A Collection of My Most Impactful Work
        </Typography>
        <Grid2
          data-aos="fade-in"
          data-aos-offset="100"
          data-aos-duration="1000"
          data-aos-once="true"
          display="flex"
          justifyContent="center"
          alignItems="center"
          container
          spacing={{
            mobile: 3,
            laptop: 4,
            desktop: 4,
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
            <Link href="/project1" underline="none">
              <Box
                component="img"
                sx={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  transition: "transform 0.3s ease", // Transition for the zoom effect
                  "&:hover": {
                    transform: "scale(1.1)", // Scale the image on hover
                  },
                }}
                alt="Project 1"
                src={project1}
              />
            </Link>
          </Grid2>

          {/* Repeat for other projects */}
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
            <Link href="/project2" underline="none">
              <Box
                component="img"
                sx={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  transition: "transform 0.3s ease", // Transition for the zoom effect
                  "&:hover": {
                    transform: "scale(1.1)", // Scale the image on hover
                  },
                }}
                alt="Project 2"
                src={project2}
              />
            </Link>
          </Grid2>
          {/* Project3 */}
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
            <Link href="/project3" underline="none">
              <Box
                component="img"
                sx={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  transition: "transform 0.3s ease", // Transition for the zoom effect
                  "&:hover": {
                    transform: "scale(1.1)", // Scale the image on hover
                  },
                }}
                alt="Project 3"
                src={project3}
              />
            </Link>
          </Grid2>
          {/* project 4 */}
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
            <Link href="/project4" underline="none">
              <Box
                component="img"
                sx={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  transition: "transform 0.3s ease", // Transition for the zoom effect
                  "&:hover": {
                    transform: "scale(1.1)", // Scale the image on hover
                  },
                }}
                alt="Project 4"
                src={project4}
              />
            </Link>
          </Grid2>
          {/* project 5 */}
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
            <Link href="/project5" underline="none">
              <Box
                component="img"
                sx={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  transition: "transform 0.3s ease", // Transition for the zoom effect
                  "&:hover": {
                    transform: "scale(1.1)", // Scale the image on hover
                  },
                }}
                alt="Project 5"
                src={project5}
              />
            </Link>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Portfolio;
