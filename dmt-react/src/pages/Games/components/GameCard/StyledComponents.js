import {
  Card,
  CardActions,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Card)({
  width: 345,
  background: 'linear-gradient(135deg,#2b324d,#212639)',
  boxShadow: '13px 13px 20px 4px rgba(43, 50, 77, 0.98)',
  position: 'relative',
});

export const ExpandMap = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'translate(0deg)' : 'translate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const MapMedia = styled(CardMedia)({
  height: '183.63px',
  width: '315px',
  paddingTop: '0.3rem',
});

export const RankMedia = styled(CardMedia)({});

export const LogoMedia = styled(CardMedia)({
  height: '183.63px',
  width: '315px',
  paddingTop: '0.3rem',
  paddingBottom: '0.2rem',
});

export const PlayersBox = styled(Box)({
  textAlign: 'left',
  fontFamily: 'Montserrat',
  fontSize: '1.3rem',
  fontWeight: 'bold',
  background: 'linear-gradient(180deg, #ff0000, #fffb00)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
});

export const MapTyp = styled(Typography)({
  textAlign: 'left',
  fontFamily: 'Montserrat',
  color: 'darkgray',
  padding: '1rem 1rem 0 1rem',
});

export const PlayersTyp = styled(Typography)({
  textAlign: 'left',
  fontFamily: 'Montserrat',
  color: 'darkgray',
});

export const RankTyp = styled(Typography)({
  fontFamily: 'Bebas Neue',
  background: 'linear-gradient(90deg, #ff0000, #fffb00)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
});

export const GameCardActions = styled(CardActions)({
  background: 'linear-gradient(90deg, #ff0000, #fffb00)',
  justifyContent: 'center',
});

export const GameCardCollapse = styled(Collapse)({
  position: 'absolute',
  top: 0,
  width: 345,
  background: 'linear-gradient(135deg,#2b324d,#212639)',
});

export const NameTyp = styled(Typography)({
  textAlign: 'left',
  fontFamily: 'Montserrat',
  background: 'linear-gradient(180deg, #ff0000, #fffb00)',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  fontSize: '1rem',
  fontWeight: 'bold',
});

export const GridCard = styled(Grid)({
  padding: '1rem',
});
