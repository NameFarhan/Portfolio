import { useTheme } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WebIcon from '@mui/icons-material/Web';
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ padding: "10vh 10vw", bgcolor: "#212139", color: "#fff" }}>
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
          CONTACT
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
          We're Just a Message Away
        </Typography>

        {/* Here is the contianer */}
        <Grid2
          display="flex"
          justifyContent="center"
          alignItems="center"
          container
          spacing={{
            mobile: 2,
            laptop: 4,
          }}
        >
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
              <LocationOnOutlinedIcon
                sx={{ color: "#3c7050", width: "30px", height: "auto" }}
              />
              <Typography
                sx={{
                  fontSize: {
                    mobile: "14px",
                    lapop: "15px",
                  },
                  color: "#fff",
                  fontWeight: "800",
                  letterSpacing: "1px",
                }}
              >
                ADDRESS
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
                Madina Town, Bahwalnagar, Pakistan
              </Typography>
            </Box>
          </Grid2>

          <Grid2
            data-aos="fade-in"
            data-aos-offset="100"
            data-aos-duration="900"
            data-aos-once="true"
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
              <EmailOutlinedIcon
                sx={{ color: "#3c7050", width: "30px", height: "auto" }}
              />
              <Typography
                sx={{
                  fontSize: {
                    mobile: "16px",
                    lapop: "20px",
                  },
                  color: "#fff",
                  fontWeight: "800",
                  letterSpacing: "1px",
                }}
              >
                GMAIL
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
                Farhanalibwn1215@gmail.com
              </Typography>
            </Box>
          </Grid2>

          <Grid2
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-duration="900"
            data-aos-once="true"
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
              <WebIcon
                sx={{ color: "#3c7050", width: "30px", height: "auto" }}
              />
              <Typography
                sx={{
                  fontSize: {
                    mobile: "16px",
                    lapop: "20px",
                  },
                  color: "#fff",
                  fontWeight: "800",
                  letterSpacing: "1px",
                }}
              >
                WEBSITE
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
                namefarhanportfolio.netlify.app
              </Typography>
            </Box>
          </Grid2>
        </Grid2>

        <ContactForm/>

      </Box>
    </>
  );
};

export default Contact;
