
import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Box, Stack } from '@mui/material';
import Message from './Message';





const Conversation = () => {
  
  return (
   <Stack height='100%' maxHeight='100vh' width='auto'>
    <Header/>

    <Box width='100%' sx={{flexGrow: 1,height: '100%', overflowY:'scroll' ,WebkitSc:''}}>
      <Message/>
    </Box>

    <Footer/>
    
   </Stack>
  )
}

export default Conversation;

