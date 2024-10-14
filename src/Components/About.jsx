import { useTheme } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";
import Wrapper from "../CustomHooks/Wrapper";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const About = () => {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: "#1f2437", padding: "5vh 0" }}>
      <Wrapper>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-duration="900"
            data-aos-once="true"
            sx={{
              color: "#fff",
              fontSize: {
                mobile: "25px",
                laptop: "35px",
              },
              fontWeight: "800",
              letterSpacing: "1px",
            }}
          >
            ABOUT ME
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
              margin: "1rem auto 2rem auto",
              maxWidth: "600px",
              lineHeight: "1.5", // Optional: improve readability
              letterSpacing: ".8px",
            }}
          >
            Hi, I’m Farhan Ali, a passionate front-end developer with over{" "}
            <Typography
              sx={{
                display: "inline-block",
                color: "#fff",
                fontWeight: "700",
                mr: ".2rem",
              }}
            >
              2
            </Typography>
            years of experience crafting{" "}
            <Typography
              sx={{
                display: "inline-block",
                color: "#fff",
                fontWeight: "700",
                mr: ".2rem",
              }}
            >
              responsive
            </Typography>{" "}
            and user-friendly web applications. I thrive on turning ideas into
            reality through{" "}
            <Typography
              sx={{
                display: "inline-block",
                color: "#fff",
                fontWeight: "700",
                mr: ".2rem",
              }}
            >
              Clean
            </Typography>
            ,
            <Typography
              sx={{
                display: "inline-block",
                color: "#fff",
                fontWeight: "700",
                mr: ".2rem",
              }}
            >
              effecient Code
            </Typography>{" "}
            and a keen eye for design.
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "4px",
            padding: "10px 10px",
            margin: "2rem 0 2rem auto",
          }}
        >
          <Grid2 container>
            <Grid2
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-duration="900"
              data-aos-once="true"
              display="flex"
              justifyContent="center"
              alignItems="center"
              item
              size={{
                mobile: 12,
                laptop: 6,
              }}
            >
              <Box sx={{ padding: "5vh 0", gap: "20px" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: "green",
                      fontSize: {
                        mobile: "18px",
                        laptop: "20px",
                      },
                      fontWeight: "800",
                    }}
                  >
                    FullName:
                  </Typography>
                  <Typography
                    sx={{
                      color: "White",
                      fontSize: {
                        mobile: "14px",
                        laptop: "18px",
                      },
                      position: {
                        mobile: "relative",
                      },
                      left: ".3rem",
                      top: ".1rem",
                    }}
                  >
                    Farhan Ali
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", m: ".5rem 0" }}
                >
                  <Typography
                    sx={{
                      color: "green",
                      fontSize: {
                        mobile: "18px",
                        laptop: "20px",
                      },
                      fontWeight: "800",
                    }}
                  >
                    Birthday:
                  </Typography>
                  <Typography
                    sx={{
                      color: "White",
                      fontSize: {
                        mobile: "14px",
                        laptop: "18px",
                      },
                      position: {
                        mobile: "relative",
                      },
                      left: ".3rem",
                      top: ".1rem",
                    }}
                  >
                    27 OCT 2007
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      color: "green",
                      fontSize: {
                        mobile: "18px",
                        laptop: "20px",
                      },
                      fontWeight: "800",
                    }}
                  >
                    Email:
                  </Typography>
                  <Typography
                    sx={{
                      color: "White",
                      fontSize: {
                        mobile: "14px",
                        laptop: "18px",
                      },
                      position: {
                        mobile: "relative",
                      },
                      left: ".3rem",
                      top: ".1rem",
                    }}
                  >
                    Farhanalibwn1215@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Grid2>
            <Grid2
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-once="true"
              display="flex"
              justifyContent="center"
              alignItems="center"
              item
              size={{
                mobile: 12,
                laptop: 6,
              }}
            >
              <Box
                sx={{
                  mt: "2rem",
                  mb: "2rem",
                  position: {
                    mobile: "relative",
                    laptop: "static",
                  },
                  right: "25px",
                }}
              >
                <Typography
                  sx={{ fontWeight: "700", color: "#fff", fontSize: "20px" }}
                >
                  SKILLS
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                    mt: "1rem",
                    mb: "1rem",
                  }}
                >
                  HTML5 & CSS3
                </Typography>
                <ProgressBar
                  completed={90}
                  width="200px"
                  bgColor="#36c270"
                  borderRadius="5px"
                  baseBgColor="#161621"
                  animateOnRender={true}
                  transitionTimingFunction="ease-in-out"
                  transitionDuration="3s"
                />
                <Typography
                  sx={{
                    color: "white",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                    mt: "1rem",
                    mb: "1rem",
                  }}
                >
                  JavaScript
                </Typography>
                <ProgressBar
                  completed={80}
                  width="200px"
                  bgColor="#36c270"
                  borderRadius="5px"
                  baseBgColor="#161621"
                  animateOnRender={true}
                  transitionTimingFunction="ease-in-out"
                  transitionDuration="3s"
                />
                <Typography
                  sx={{
                    color: "white",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                    mt: "1rem",
                    mb: "1rem",
                  }}
                >
                  Material Ui
                </Typography>
                <ProgressBar
                  completed={85}
                  width="200px"
                  bgColor="#36c270"
                  borderRadius="5px"
                  baseBgColor="#161621"
                  animateOnRender={true}
                  transitionTimingFunction="ease-in-out"
                  transitionDuration="3s"
                />
                <Typography
                  sx={{
                    color: "white",
                    fontSize: {
                      mobile: "14px",
                      laptop: "16px",
                    },
                    mt: "1rem",
                    mb: "1rem",
                  }}
                >
                  Responsive Design
                </Typography>
                <ProgressBar
                  completed={90}
                  width="200px"
                  bgColor="#36c270"
                  borderRadius="5px"
                  baseBgColor="#161621"
                  animateOnRender={true}
                  transitionTimingFunction="ease-in-out"
                  transitionDuration="3s"
                />
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default About;
