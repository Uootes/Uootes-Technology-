import React from "react";
import { Stack, Button, Box, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import BalanceIcon from '@mui/icons-material/Balance';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import BrightnessLowOutlinedIcon from '@mui/icons-material/BrightnessLowOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";

export const menuList = [
  { name: 'Home', icon: <HomeIcon />, url: "/home" },
  { name: 'Incubator', icon: <AlarmOnIcon />, url: "/Comingsoon" },
  { name: 'Team', icon: <Diversity3Icon />, url: "/team" },
  { name: 'Fundhub', icon: <CurrencyExchangeOutlinedIcon />, url: "/fundhub" },
  { name: 'Profile', icon: <AccountCircleIcon />, url: "/profile" },
  { name: 'Leaders', icon: <EmojiEventsOutlinedIcon />, url: "/leader" },
  { name: 'Upgrade', icon: <NorthOutlinedIcon />, url: "/Comingsoon" },
  { name: 'Payment Dispute', icon: <BalanceIcon />, url: "/Comingsoon" },
  { name: 'Support', icon: <HandshakeOutlinedIcon />, url: "/support" },
  { name: 'History', icon: <LibraryBooksIcon />, url: "/Comingsoon" },
  { name: 'Settings', icon: <BrightnessLowOutlinedIcon />, url: "/settings" },
  { name: 'Log out', icon: <LogoutOutlinedIcon />, url: "/log_out" },
];

const User_Sidebar = ({ isMenuOpen, setIsMenuOpen, selectedMenu, setSelectedMenu }) => {
  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (name) => {
    setSelectedMenu(name);
    setIsMenuOpen(false); // Hide sidebar on menu item click
  };

  return (
    <Stack
      sx={{
        height: { xs: isMenuOpen ? "100vh" : "auto", md: "100%" },
        width: { xs: "100%", md: "auto" },
        backgroundColor: { xs: "#121212", md: "transparent" },
      }}
    >
      {/* Mobile Menu Button */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "flex-end",
          p: 2,
          borderBottom: isMenuOpen ? "1px solid #3d3d3d" : "none",
        }}
      >
        <button
          onClick={toggle}
          className="text-gray-300 hover:text-purple-400"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </Box>

      {/* Menu Items */}
      <Stack
        direction={{ xs: "column", md: "column" }}
        sx={{
          display: { xs: isMenuOpen ? "flex" : "none", md: "flex" },
          p: 2,
          gap: 1,
          overflowY: "auto",
        }}
      >
        {menuList.map((item) => (
          <Link to={item.url} key={item.name}>
            <Button
              sx={{
                px: 2,
                py: 1,
                border: "1px solid #4e4e4e",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "flex-start",
                background: window.location.pathname.includes(item.url) ? "#1e40af" : "transparent", // Highlight active route
                color: "white",
                textTransform: "none",
                "&:hover": {
                  background: window.location.pathname.includes(item.url) ? "#c084fc" : "#333",
                },
                // background:
                  // item.name === selectedMenu ? "#1e40af" : "transparent",
                // color: "white",
              }}
              onClick={() => handleMenuClick()}
              role="menuitem"
            >
              <Box
                sx={{
                  mr: 2,
                  color: window.location.pathname.includes(item.url) ? "#FC2360" : "#FEfEEF",
                }}
              >
                {item.icon}
              </Box>
              <Typography
                sx={{
                  opacity: window.location.pathname.includes(item.url) ? 1 : 0.8,
                }}
              >
                {item.name}
              </Typography>
            </Button>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default User_Sidebar;