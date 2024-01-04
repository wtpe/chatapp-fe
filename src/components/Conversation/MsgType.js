import { useTheme } from '@emotion/react'
import { Box, Divider, IconButton, Link, Menu, MenuItem, Stack, Typography } from '@mui/material'
import { DotsThreeCircleVertical, DownloadSimple, Image } from 'phosphor-react';
import React, { useState } from 'react'
import { Message_options } from '../../data';

const DocMsg = ({el}) => {
  const theme=useTheme();
  return (
    <Stack direction='row' justifyContent={el.incoming ? 'start' : 'end'}  alignItems='end'
        >
      <Box p={1.5} sx={{backgroundColor:el.incoming ? theme.palette.background.default:theme.palette.primary.main, borderRadius:1.5, width:'max-content'}}>
        <Stack spacing={2} >
          <Stack p={2} direction='row' spacing={3} alignItems='center' sx={{backgroundColor: theme.palette.background.paper,borderRadius:1 }}>
          <Image size={48}/>
          <Typography variant='caption'>Abstract.png</Typography>
          <IconButton>
            <DownloadSimple />
          </IconButton>
          </Stack>
          <Typography variant='body2' sx={{color:el.incoming ? theme.palette.text :'#fff' }}>{el.message} </Typography>
        </Stack>
      </Box>
      <MessageOptions/>
    </Stack>
  )
}

const LinkMsg = ({el}) => {
  const theme=useTheme();
  return (
    <Stack direction='row' justifyContent={el.incoming ? 'start' : 'end'}  alignItems='end'
        >
            <Box p={1.5} sx={{backgroundColor:el.incoming ? theme.palette.background.default:theme.palette.primary.main, borderRadius:1.5, width:'max-content'}}>
              <Stack spacing={2}>
                <Stack p={2} spacing={3} alignItems='center' sx={{backgroundColor: theme.palette.background.paper,borderRadius:1}}>
                  <img src={el.preview} alt={el.message} style={{maxHeight:210, borderRadius: '10px'}} />
                  <Stack spacing={2}>
                    <Typography variant='subtitle2'>Meo meo</Typography>
                    <Typography variant='subtitle2' component={Link}>www.youtube.com</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
            <MessageOptions/>
    </Stack>
  )
}





const ReplyMsg = ({el}) => {
  const theme=useTheme();
  return (
    <Stack direction='row' justifyContent={el.incoming ? 'start' : 'end'}  alignItems='end'
        >
            <Box p={1.5} sx={{backgroundColor:el.incoming ? theme.palette.background.default:theme.palette.primary.main, borderRadius:1.5, width:'max-content'}}>
              <Stack spacing={2}>
                <Stack p={2} direction='column' spacing={3} alignItems='center' sx={{
                  backgroundColor:theme.palette.background.paper,
                  borderRadius:1,
                }}>
                  <Typography variant='body2' color={theme.palette.text}>{el.message}</Typography>
                </Stack>
                <Typography variant='body2' color={el.incoming?theme.palette.text : '#fff'}>
                  {el.reply}
                </Typography>
              </Stack>
            </Box>
            <MessageOptions/>
    </Stack>
  )
}




const MediaMsg =({el,menu}) =>{
    const theme= useTheme();
    return (
        <Stack direction='row' justifyContent={el.incoming ? 'start' : 'end'}  alignItems='end'
        >
            <Box p={1.5} sx={{backgroundColor:el.incoming ? theme.palette.background.default:theme.palette.primary.main, borderRadius:1.5, width:'max-content'}}>
                <Stack spacing={1}>
                    <img src={el.img} alt={el.message} style={{maxHeight:210,borderRadius:'10px' }}></img>
                </Stack>
            </Box>
            {menu && <MessageOptions />}
            
        </Stack>
    )
}

const TextMsg = ({el, menu}) => {
    const theme= useTheme();
  return (
    <div>
      <Stack direction='row' justifyContent={el.incoming ? 'start'  : 'end' } alignItems='end' >
        <Box p={1.5} sx={{backgroundColor:el.incoming ? theme.palette.background.default : theme.palette.primary.main , borderRadius:1.5, width:'max-content' }}>

        <Typography  variant='body2' color={el.incoming ? theme.palette.text : '#fff'}>
           {el.message}
        </Typography>
        </Box>
        {menu && <MessageOptions />}
      </Stack>
    </div>
  )
}

const MessageOptions = ({el})=>{
  const [anchorEl,setAnchorEl]= useState(null);
  const open= Boolean(anchorEl);
  const handleClick = (event) =>{
    setAnchorEl(event.currentTarget);
  };
  const handleClose = ()=>{
    setAnchorEl(null);
  }
  return (
    <>
    <DotsThreeCircleVertical id='basic-button' aria-controls={open ? 'basic-menu' : undefined} aria-haspopup='true' aria-expanded={open ? 'true' :undefined} onClick={handleClick} size={20}/>
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <Stack spacing={1} px={1}>
        {Message_options.map((el)=>(
          <MenuItem onClick={()=>{}}>{el.title}</MenuItem>
        ))}
       </Stack>

      </Menu>
    
    </>
  )
}

const Timeline = ({el}) => {
    const theme=useTheme();
  return (
   <Stack direction='row' alignItems='center' justifyContent='space-between'>
    <Divider width='45%'/>
    <Typography variant='caption' sx={{color:theme.palette.text}}>{el.text}</Typography>
    <Divider width='45%'/>
   </Stack>
  )
}

export {Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg, MessageOptions};
