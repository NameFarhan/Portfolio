import { useTheme } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WebIcon from "@mui/icons-material/Web";
import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import { CustomButton } from "../Custom/ContactButton";
import emailjs from "@emailjs/browser";
import SimpleAlert from "../MuiComponents/Alert";

const Contact = () => {
  const theme = useTheme();
  const [Name, setName] = useState("");
  const [YourEmail, setYourEmail] = useState("");
  const [YourRequirements, setYourRequirements] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [requirementsError, setRequirementsError] = useState(false);
  const [Alert, setAlert] = useState(false);

  useEffect(() => {
    emailjs.init("_0TVytWZ61HeXc11D"); // Initialize EmailJS with the public key (user ID)
  }, []);

  const handleSubmit = () => {
    let isValid = true;

    if (!Name) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }

    if (!YourEmail || !/\S+@\S+\.\S+/.test(YourEmail)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (!YourRequirements) {
      setRequirementsError(true);
      isValid = false;
    } else {
      setRequirementsError(false);
    }

    if (isValid) {
      const serviceId = "service_pkxd6t5";
      const templateId = "template_p5n5o9q";

      const templateParams = {
        from_name: Name,
        from_email: YourEmail,
        to_name: "Farhan Ali",
        message: YourRequirements,
      };

      emailjs
        .send(serviceId, templateId, templateParams)
        .then((response) => {
          console.log("Email sent Successfully!", response);
          setAlert(true);
          setName("");
          setYourEmail("");
          setYourRequirements("");
        })
        .catch((error) => {
          console.log("Email Failed to Send", error);
        });
    }
  };
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
        {/* Here is the contact form */}
        <ContactForm
          Name={Name}
          setName={setName}
          YourEmail={YourEmail}
          setYourEmail={setYourEmail}
          YourRequirements={YourRequirements}
          setYourRequirements={setYourRequirements}
          nameError={nameError}
          setNameError={setNameError}
          emailError={emailError}
          setEmailError={setEmailError}
          requirementsError={requirementsError}
          setRequirementsError={setRequirementsError}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: {
              mobile: "center",
              laptop: "flex-end",
            },
            mt: {
              mobile: "2rem",
              laptop: "1rem",
            },
          }}
        >
          <CustomButton onClick={handleSubmit}>SEND MESSAGE</CustomButton>
        </Box>
        {Alert ? (
          <>
            <SimpleAlert
            />
          </>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Contact;
