import React from "react";
import { Stack, Button, Box, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import BalanceIcon from '@mui/icons-material/Balance';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import BrightnessLowOutlinedIcon from '@mui/icons-material/BrightnessLowOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const menuList = [
  { name: 'Home', icon: <HomeIcon />, url: "#userhome", }, //done
  { name: 'Trade Center', icon: <AlarmOnIcon />, url: "#Tradecenter", },
  { name: 'Fundhub', icon: <CurrencyExchangeOutlinedIcon />, url:"#fundhub", }, // done
  { name: 'Leaders', icon: <EmojiEventsOutlinedIcon />, url: "/comingsoon", },
  { name: 'Payment Dispute', icon: <BalanceIcon />, url: "/comingsoon", },
  { name: 'History', icon: <LibraryBooksIcon />, url: "/comingsoon", },
  { name: 'Support', icon: <HandshakeOutlinedIcon />, url: "/comingsoon", },
  { name: 'Settings', icon: <BrightnessLowOutlinedIcon/>, url: "/comingsoon", },
  { name: 'Log out', icon: <LogoutOutlinedIcon />, url: "/comingsoon", },
];

const Ex_Sidebar = ({ selectedMenu, setSelectedMenu, isMenuOpen, setIsMenuOpen }) => {
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
          <Button
            sx={{
              px: 2,
              py: 1,
              border: "1px solid #4e4e4e",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "flex-start",
              background:
                item.name === selectedMenu ? "#1e40af" : "transparent",
              color: "white",
              textTransform: "none",
              "&:hover": {
                background:
                  item.name === selectedMenu ? "#c084fc" : "#333",
              },
            }}
            onClick={() => handleMenuClick()}
            href={item.url}
            key={item.name}
            aria-selected={item.name === selectedMenu}
            role="menuitem"
          >
            <Box
              sx={{
                mr: 2,
                color:
                  item.name === selectedMenu ? "#FC2360" : "#FEfEEF",
              }}
            >
              {item.icon}
            </Box>
            <Typography
              sx={{
                opacity: item.name === selectedMenu ? 1 : 0.8,
              }}
            >
              {item.name}
            </Typography>
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

export default Ex_Sidebar;