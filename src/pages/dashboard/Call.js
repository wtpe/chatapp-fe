import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Search from "../../components/Search/Search";
import SearchIconWrapper from "../../components/Search/SearchIconWrapper";
import { MagnifyingGlass, Phone } from "phosphor-react";
import StyledInputBase from "../../components/Search/StyledBaseInput";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { useTheme } from "@emotion/react";
import { CallLogElement } from "../../components/CallElement";
import { CallLogs } from "../../data";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
    const [openDialog,setOpenDialog] = useState(false);
    const handleCloseDialog = ()=>{
        setOpenDialog(false);
    }
    
    const theme = useTheme();
  return (
    <>
    
      <Stack direction="row" sx={{ width: "100%" }}>
        {/* left */}
        <Box
          sx={{
            overflow:'auto',
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack alignItems='center' justifyContent='space-between' direction='row' >
              <Typography variant="h5">Call Log</Typography>
            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search" }}
                ></StyledInputBase>
              </Search>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="subtitle2" >
                Start a conversation
              </Typography>
              <IconButton onClick={()=>{setOpenDialog(true);}} >
                <Phone style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack sx={{ flexGrow: 1, overflow: "auto", height: "100%" }}>
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={1} >
                    {CallLogs.map((el,idx)=>{
                        return <CallLogElement key={idx} {...el} />
                    })}
                </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack> 
        </Box>
      </Stack>
      {openDialog && (
        <StartCall open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Call;
