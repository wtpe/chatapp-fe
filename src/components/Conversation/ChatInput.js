import { Fab, IconButton, InputAdornment, Stack, TextField, Tooltip, styled } from '@mui/material'
import { Camera, File, Image, LinkSimple, Smiley, Sticker, User } from 'phosphor-react'
import React from 'react'
import { useState } from 'react'

const StyledInput = styled(TextField)(({theme})=>({
    '& .MuiInputBase-input':{
      paddingTop:'12px',
      paddingBottom:'12px'
    }
  }))

const Actions = [
  {
    color:'#4da5fe',
    icon:<Image size={24} />,
    y:102,
    title: 'Photo/video',
  },
  {
    color:'#1b8cfe',
    icon:<Sticker size={24} />,
    y:172,
    title: 'Stickers',
  },
  {
    color:'#0172e4',
    icon:<Camera size={24} />,
    y:242,
    title: 'Camera',
  },
  {
    color:'#0159b2',
    icon:<File size={24} />,
    y:312,
    title: 'Document',
  },
  {
    color:'#013f7f',
    icon:<User size={24} />,
    y:382,
    title: 'Contact',
  },
]

const ChatInput = ({setOpenPicker}) => {
  const [actions,setActions]=useState(false);

  return (
    <StyledInput fullWidth placeholder=' Write a message...' variant='filled' InputProps={{
        disableUnderline:true, startAdornment:(
        <Stack sx={{width:'max-content'}}>
          <Stack sx={{position:'relative', display: actions ? 'inline-block':'none'}}>
            {Actions.map((el)=>(
              <Tooltip placement='right'  title={el.title}>
              <Fab sx={{position:'absolute',top:-el.y, backgroundColor:el.color  }}>
                {el.icon}
              </Fab>
              </Tooltip>
            ))}
          </Stack>
          <InputAdornment>
            <IconButton onClick={()=>{
              setActions(prev=>!prev);
            }}>
              <LinkSimple/>
            </IconButton>
        </InputAdornment>
        </Stack>
        ),
        endAdornment:<InputAdornment>
        <IconButton onClick={()=>{
          setOpenPicker(prev => !prev);
        }}>
          <Smiley />
        </IconButton>
        </InputAdornment>
      }}>

      </StyledInput>
  )
}

export default ChatInput
