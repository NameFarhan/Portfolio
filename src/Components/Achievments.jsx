import { useTheme } from "@emotion/react";
import { Box, Grid2, Typography } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import React from "react";

const Achievments = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ padding: "10vh 10vw", bgcolor: "#1b1b27" }}>
        <Grid2 container spacing={{
            mobile:5,
            laptop:6
        }}>
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
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                flexDirection:'column'
              }}
            >
              <InsertEmoticonIcon
                sx={{ width: "100px", height: "auto", color: "#308d59" }}
              />
              <Typography
                sx={{
                  fontSize: {
                    mobile: "15px",
                    laptop: "20px",
                  },
                  fontWeight:'800',
                  color:'#fff',
                  mb:'1rem'
                }}
              >
                70+
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    mobile: "12px",
                    laptop: "15px",
                  },
                  fontWeight:'600',
                  color:'#54555e'
                }}
              >
                HAPPY CLIENTS
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
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                flexDirection:'column'
              }}
            >
              <OutlinedFlagIcon
                sx={{ width: "100px", height: "auto", color: "#308d59" }}
              />
              <Typography
                sx={{
                  fontSize: {
                    mobile: "15px",
                    laptop: "20px",
                  },
                  fontWeight:'800',
                  color:'#fff',
                  mb:'1rem'
                }}
              >
                40+
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    mobile: "12px",
                    laptop: "15px",
                  },
                  fontWeight:'600',
                  color:'#54555e'
                }}
              >
                PROJECTS DONE
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
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                flexDirection:'column'
              }}
            >
              <StarBorderOutlinedIcon
                sx={{ width: "100px", height: "auto", color: "#308d59" }}
              />
              <Typography
                sx={{
                  fontSize: {
                    mobile: "15px",
                    laptop: "20px",
                  },
                  fontWeight:'800',
                  color:'#fff',
                  mb:'1rem'
                }}
              >
                2
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    mobile: "12px",
                    laptop: "15px",
                  },
                  fontWeight:'600',
                  color:'#54555e'
                }}
              >
                AWARDS
              </Typography>
            </Box>  
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Achievments;
