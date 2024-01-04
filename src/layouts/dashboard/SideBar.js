import { useTheme } from "@emotion/react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import React from "react";
import AntSwitch from "./AntSwitch";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import useSettings from "../../hooks/useSettings";
import { Gear } from "phosphor-react";
import logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { useNavigate } from "react-router-dom";

const getPath= (index =>{
  switch (index){
    case 0:
      return '/app';
    case 1:
      return '/group';
    case 2:
      return '/call';
    case 3:
      return '/settings';
    default:
      break;
  }
})

const getMenuPath =(index)=>{
  switch(index){
    case 0:
      return "/profile";
    case 1:
      return "/settings";
    case 2:
      return "/auth/login";
    default:
      break;
  }
}

const SideBar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  console.log(theme);

  const { onToggleMode } = useSettings();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        height: "100vh",
        width: 100,
      }}
    >
      <Stack
        direction="column"
        alignItems={"center"}
        sx={{ height: "100%" }}
        spacing={3}
        justifyContent="space-between"
      >
        <Stack spacing={3} alignItems={"center"}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img src={logo} alt="logo"></img>
          </Box>
          {Nav_Buttons.map((el) =>
            el.index === selected ? (
              <Box
                p={1}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                  alignItems: "center",
                }}
              >
                <IconButton
                  sx={{ width: "max-content", color: "#fff" }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelected(el.index);
                  navigate(getPath(el.index))
                }}
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
                key={el.index}
              >
                {el.icon}
              </IconButton>
            )
          )}
          <Divider sx={{ width: "48px" }} />
          {selected === 3 ? (
            <Box
              p={1}
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: 1.5,
              }}
            >
              <IconButton sx={{ width: "max-content", color: "#fff" }}>
                <Gear />
              </IconButton>
            </Box>
          ) : (
            <IconButton
              onClick={() => {
                setSelected(3);
                navigate(getPath(3))
              }}
              sx={{
                width: "max-content",
                color:
                  theme.palette.mode === "light"
                    ? "#000"
                    : theme.palette.text.primary,
              }}
            >
              <Gear />
            </IconButton>
          )}
        </Stack>
        <Stack spacing={3}>
          <AntSwitch
            defaultChecked
            onChange={() => {
              onToggleMode();
            }}
          />
          <Avatar
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            src={faker.image.avatar()}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{}}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el,id) => (
                <MenuItem onClick={() => {
                  handleClick();
                 
                }}>
                  <Stack
                    onClick={()=>{
                      navigate(getMenuPath(id))
                    }}
                    sx={{ width: 100 }}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
