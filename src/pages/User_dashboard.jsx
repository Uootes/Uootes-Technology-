import { useState } from "react";
import { Box, Stack } from "@mui/material";
import User_Sidebar from '../component/user_mvp/User_Sidebar';
import Details from "../component/user_mvp/Details";
import { useLocation } from "react-router-dom";

const User_dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const location = useLocation();
  const currentPath = location.pathname.replace(/^\//, ""); // Remove leading slash

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" }, height: "100vh" }}>
      <Box
        sx={{
          width: { md: "100%", xs: "100%", md: "auto" },
          height: { xs: isMenuOpen ? "100%" : "auto", md: "100vh" },
          borderRight: { md: "1px solid #3d3d3d", xs: "none" },
          px: { xs: 0, md: 2 },
          position: { xs: isMenuOpen ? "fixed" : "static" },

          top: 0,
          left: 0,
          zIndex: 10,
          backgroundColor: { xs: isMenuOpen ? "#121212" : "transparent" },
        }}
      >
        <User_Sidebar 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      </Box>

      <Box
        sx={{
          overflowY: "auto",
          height: "90vh",
          width: { md: "100%",xs: "100%" },
          display: "flex ",
          p: 2,
          gap: 1,
          ml: { xs: isMenuOpen ? "250px" : "0" },
          transition: "margin-left 0.3s",
        }}
      >
        <Details selectedMenu={currentPath || "home"} /> {/* Use current path */}
      </Box>
    </Stack>
  );
};

export default User_dashboard;