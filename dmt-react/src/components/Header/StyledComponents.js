import { AppBar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderAppBar = styled(AppBar)({
  background: 'linear-gradient(135deg,#2b324d,#212639)',
  marginBottom: '4rem',
});

export const HButton = styled(Button)({
  background: 'linear-gradient(90deg, #ff0000, #fffb00)',
  color: 'black',
  width: '80px',
});

export const LogoTyp = styled(Typography)({
  fontFamily: 'Bebas Neue',
  background: 'linear-gradient(180deg, #ff0000, #fffb00)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  flexGrow: 1,
});
