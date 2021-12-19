import { AppBar, Menu, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderAppBar = styled(AppBar)({
  backgroundColor: '#1d2132',
  padding: '1rem',
  marginBottom: '4rem',
});

export const HeaderTypography = styled(Typography)({
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'Bebas Neue',
  fontSize: '2rem',
  background: 'linear-gradient(90deg, #ff0000, #fffb00)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
});

export const HeaderMenu = styled(Menu)({
  marginTop: '60px',
  width: 320,
  maxWidth: '100%',
});
