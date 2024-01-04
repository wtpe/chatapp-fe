import { useTheme } from "@emotion/react";
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledBadge } from "../pages/dashboard/Chats";
import { faker } from "@faker-js/faker";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Phone,
  VideoCamera,
} from "phosphor-react";


const CallLogElement = ({ name, incoming, missed,  online }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.background.paper,
      }}
      p={2}
    >
        <Stack direction="row" spacing={2}>
            <Stack direction='row'                  justifyContent='space-between' alignItems='center'>
                {online ? (
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                >
                    <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
                </StyledBadge>
                ) : (
                <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
                )}
            </Stack>
            <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Stack spacing={1} alignItems="center" direction="row">
                {incoming ? (
                <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <Typography variant="caption">Yesterday 12:12</Typography>
            </Stack>
            </Stack>
            <IconButton>
                <Phone color="green" />
            </IconButton>
      </Stack>
      
    </Box>
  );
};

const CallElement = ({online,name})=>{
    const theme=useTheme();
    return(
        <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor: theme.palette.background.paper,
        }}
        p={2}
        >
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
            {online ? (
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                >
                    <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
                </StyledBadge>
                ) : (
                <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
                )}
                <Typography variant="subtitle2">{name}</Typography>
                <Stack direction='row' alignItems='center'>
                    <IconButton>
                        <Phone color="green"/>
                    </IconButton>
                    <IconButton>
                        <VideoCamera color="green" />
                    </IconButton>
                </Stack>
                
            </Stack>
        </Box>
    )
}

export { CallLogElement,CallElement };
