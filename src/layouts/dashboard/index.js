import { useTheme } from "@emotion/react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Stack } from "@mui/material";

// const isAuthenticated = false;

const DashboardLayout = () => {
  // if(isAuthenticated){
  //   return <Navigate to='/auth/login'/>
  // }
  const theme = useTheme();
  console.log(theme);
  
  return (
    <Stack direction='row'>
      <SideBar/>
      <Outlet />
    </Stack>
  );
};


export default DashboardLayout;
