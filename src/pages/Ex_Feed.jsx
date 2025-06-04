import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Ex_Sidebar from '../component/ex_mvp/Ex_Sidebar';
import Details from "../component/ex_mvp/Details";

const Ex_Feed = () => {
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Stack sx={{ flexDirection: { md: "row", xs: "column" }, height: "100vh" }}>
      <Box
        sx={{
          width: { xs: "100%", md: "auto" },
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
        <Ex_Sidebar
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </Box>
      {/* Show content only when sidebar is closed on xs screens */}
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: { xs: "100%", md: "90vh" },
          flex: { md: 2 },
          display: { xs: isMenuOpen ? "none" : "block", md: "block" },
        }}
      >
        <Details />
      </Box>
    </Stack>
  );
};

export default Ex_Feed;