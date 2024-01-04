import { useTheme } from '@emotion/react'
import { Box, IconButton, Stack, } from '@mui/material'
import { PaperPlaneTilt } from 'phosphor-react';
import React, { useState } from 'react'
import ChatInput from './ChatInput';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'


const Footer = () => {
  const theme = useTheme();
  const [openPicker,setOpenPicker]= useState(false);
  return (
    <Box p={2} width='100%' sx={{ height: 100, width: '100%', backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.default, boxShadow: '0px 0px 2px rgba(0,0,0,0.25)' }}>
      <Stack direction='row' alignItems='center' spacing={3}>
        <Stack sx={{width:'100%'}}>
          {/* Chat Input */}
          <Box sx={{display:openPicker ?'inline':'none' ,zIndex:10, position:'fixed',bottom: 88, right:100  }}>
          <Picker data={data} onEmojiSelect={console.log} theme={theme.palette.mode} />
          </Box>
          <ChatInput setOpenPicker={setOpenPicker} />
        </Stack>
        <Box sx={{ height: 48, width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
          <Stack sx={{ height: '100%', width: '100%' }} alignItems='center' justifyContent='center'>

            <IconButton>
              <PaperPlaneTilt color='#fff' />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Footer
