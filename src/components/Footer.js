import { Box, Typography, Stack } from "@mui/material";
import logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack alignItems="center" px="40px" pt="24px">
        <img src={logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" ph="40px" mt='20px'>
          Made with 💖 by JavaScript Mastery
        </Typography>{" "}
      </Stack>{" "}
    </Box>
  );
};

export default Footer;
