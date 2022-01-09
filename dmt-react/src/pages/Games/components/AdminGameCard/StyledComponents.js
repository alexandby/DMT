import { Box, Input, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AdminBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '49.56%',
  transform: 'translate(-50%, -50%)',
  width: 345,
  background: 'linear-gradient(135deg,#2b324d,#212639)',
  boxShadow: 24,
  padding: '1rem',
});

export const PlayersTyp = styled(Typography)({
  textAlign: 'left',
  fontFamily: 'Montserrat',
  color: 'darkgray',
});

export const ValidationTyp = styled(Typography)({
  textAlign: 'left',
  fontFamily: 'Montserrat',
  color: 'red',
});

export const AdmInput = styled(Input)({
  width: '345px',
  color: 'white',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  background: 'linear-gradient(90deg, #ff0000, #fffb00)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
});

export const BtnBox = styled(Box)({
  textAlign: 'center',
  marginTop: '1rem',
  color: 'darkgray',
});
