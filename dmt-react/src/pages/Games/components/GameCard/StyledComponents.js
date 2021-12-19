import { Card, CardMedia, Collapse, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GameCardWrapper = styled(Card)({
  width: 345,
  background: 'linear-gradient(135deg,#2b324d,#212639)',
  boxShadow: '13px 13px 20px 4px rgba(43, 50, 77, 0.98)',
  position: 'relative',
});

export const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'translate(0deg)' : 'translate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const GameCardTypography = styled(Typography)({
  fontFamily: 'Montserrat',
  color: 'white',
});

export const BebasTypography = styled(Typography)({
  fontFamily: 'Bebas Neue',
  background: 'linear-gradient(90deg, #ff0000, #fffb00)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
});

export const GameCardActions = styled(CardMedia)({
  background: 'linear-gradient(90deg, #ff0000, #fffb00)',
  justifyContent: 'center',
});

export const GameCardCollapse = styled(Collapse)({
  position: 'absolute',
  bottom: 50,
  width: 345,
});
