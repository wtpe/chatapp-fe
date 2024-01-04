import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import { useTheme } from "@emotion/react";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../StarredMessages";



const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);
  console.log(sidebar)
  return (
    <Stack direction='row' sx={{ width: '100%' }}>
      <Chats />

      <Box sx={{ height: '100vh', width: sidebar.open ? 'calc(100vw - 740px)' : 'calc(100vw - 420px)', backgroundColor: theme.palette.mode === 'light' ? "#F0F4FA" : theme.palette.background.paper }}>
        <Conversation />
      </Box >
      {sidebar.open && (() => {
        // <Contact />
        switch (sidebar.type) {
          case "CONTACT":
            return <Contact />;
          case "STARRED":
            return <StarredMessages />;
          case "SHARED":
            return <SharedMessages />;
          default:
            break;
        }
      })()}

    </Stack>
  );
};

export default GeneralApp;
