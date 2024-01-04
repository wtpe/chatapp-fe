import { Badge, Box, Button, Divider, IconButton,  Stack, Typography, styled } from '@mui/material'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react'
import { ChatList } from '../../data'
import React from 'react'
import { useTheme } from '@emotion/react'
import { SimpleBarStyle } from '../../components/Scrollbar'
import Search from '../../components/Search/Search'
import SearchIconWrapper from '../../components/Search/SearchIconWrapper'
import StyledInputBase from '../../components/Search/StyledBaseInput'
import ChatElement from '../../components/ChatElement'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));





const Chats = () => {
  const theme = useTheme();
  return (
    <Box sx={{ position: 'relative', width: 320, backgroundColor: theme.palette.mode === 'light' ? "#F8FAFF" : theme.palette.background.default, boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
      <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
        <Stack direction='row' alignItems='center' justifyContent='space-between' >
          <Typography variant='h5'>
            Chats
          </Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color='#709CE6' />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search' />
          </Search>
        </Stack>
        <Stack spacing={1}>

          <Stack direction='row' alignItems='center' spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>

        <Stack direction='column' sx={{ flexGrow: 1, overflow: 'auto', height: '100%' }}>
          
          <SimpleBarStyle >
            <Stack spacing={0.5}>
              <Typography variant='subtitle2' sx={{}}>
                Pinned
              </Typography>
              {ChatList.filter((e) => e.pinned).map((e) => {
                return <ChatElement {...e} />
              })}
            </Stack>

            <Stack spacing={0.5}>
              <Typography variant='subtitle2' sx={{}}>
                All Chats
              </Typography>
              {ChatList.filter((e) => !e.pinned).map((e) => {
                return <ChatElement {...e} />
              })}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  )
}

export {StyledBadge}

export default Chats
