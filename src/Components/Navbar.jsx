import { useTheme } from "@mui/material/styles";
import { Box, Button, Modal, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };


  const buttonStyles = {
    color: "#fff",
    "&:hover": {
      color: "green",
    },
    fontWeight: "500",
    fontSize: '12px',
  };  

  return (
    <>
      <Box sx={{ padding: "2vh 5vw", bgcolor: "rgba(10, 10, 10, 0.9)" }}>
        <Box
          sx={{
            display: {
              mobile: "none",
              laptop: "flex",
            },
            alignItems: "center",
            justifyContent: {
              mobile: "center",
              laptop: "flex-end",
            },
            gap: "10px",
          }}
        >
          <Button sx={buttonStyles}>Home</Button>
          <Button sx={buttonStyles}>About</Button>
          <Button sx={buttonStyles}>Portfolio</Button>
          <Button sx={buttonStyles}>Services</Button>
          <Button sx={buttonStyles}>Blog</Button>
          <Button sx={buttonStyles}>Contact</Button>
        </Box>
        <MenuIcon
          onClick={handleModalOpen}
          sx={{
            color: "#fff",
            display: {
              mobile: "block",
              laptop: "none",
            },
            margin: 'auto',
            cursor: 'pointer',
          }}
        />

        <Modal
          open={openModal}
          onClose={handleModalClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}
        >
          <Box
            sx={{
              bgcolor: "rgba(10, 10, 10, 0.9)",
              borderRadius: 2,
              p: 4,
              color:'#fff',
              textAlign:'center',
            }}
          >
            <Typography sx={{mb:'1rem'}} variant="h6" component="h2">
              Navigation
            </Typography>
            <Button sx={buttonStyles} onClick={handleModalClose}>Home</Button>
            <Button sx={buttonStyles} onClick={handleModalClose}>About</Button>
            <Button sx={buttonStyles} onClick={handleModalClose}>Portfolio</Button>
            <Button sx={buttonStyles} onClick={handleModalClose}>Services</Button>
            <Button sx={buttonStyles} onClick={handleModalClose}>Blog</Button>
            <Button sx={buttonStyles} onClick={handleModalClose}>Contact</Button>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default Navbar;
