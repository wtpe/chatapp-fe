import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'scroll',
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  // maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 0.5,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
    borderRadius : 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
  "& .simplebar-placeholder": {
    height: '0 !important',
  },
  "& .webkit-scrollbar-track":{
    boxShadow: alpha(theme.palette.grey[600], 0.48),
    bordeRadius: 10
  },
  '& .webkit-scrollbar-thumb': {
    backgroundColor: alpha(theme.palette.grey[600], 1),
    borderRadius: 10
  }
}));

// ----------------------------------------------------------------------

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default function Scrollbar({ children, sx, ...other }) {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle>
      <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
}

export {SimpleBarStyle};
