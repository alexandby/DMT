import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Grid,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const GameCard = (props) => {
  return (
    <Card
      sx={{
        width: 345,
        background: 'linear-gradient(135deg,#2b324d,#212639)',
        boxShadow: '13px 13px 20px 4px rgba(43, 50, 77, 0.98)',
      }}
    >
      <CardMedia
        sx={{
          px: '1rem',
          pt: '1rem',
        }}
        component="img"
        height="194"
        image={props.obj.logo}
        alt="cardHeaderImg"
      />
      <CardContent>
        <Grid container direction="row" wrap="wrap">
          <Grid item xs={6}>
            <Typography
              variant="subtitle2"
              color="white"
              align="left"
              sx={{ fontFamily: 'Montserrat' }}
            >
              Current players:
            </Typography>
            <Typography variant="h5" color="white" align="left" sx={{ fontFamily: 'Montserrat' }}>
              {props.obj.signPlayers}
            </Typography>
            <Typography
              variant="subtitle2"
              color="white"
              align="left"
              sx={{ fontFamily: 'Montserrat' }}
            >
              Max players:
            </Typography>
            <Typography variant="h5" color="white" align="left" sx={{ fontFamily: 'Montserrat' }}>
              {props.obj.maxPlayers}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'center' }}>
            <Typography
              variant="h5"
              color="text.primary"
              sx={{
                fontFamily: 'Bebas Neue',
                background: 'linear-gradient(90deg, #ff0000, #fffb00)',
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
              }}
            >
              Required rank:
            </Typography>
            <CardMedia
              sx={{ marginTop: 0.5 }}
              component="img"
              image={props.obj.rank}
              alt="card rank img"
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          background: 'linear-gradient(90deg, #ff0000, #fffb00)',
          justifyContent: 'center',
        }}
      >
        <IconButton aria-label="show details" sx={{ fontSize: 'large' }}>
          <MoreHorizIcon />
        </IconButton>
        <IconButton aria-label="play current game">
          <PlayArrowIcon />
        </IconButton>
        <IconButton
          onClick={props.onDelete}
          aria-label="delete game card"
          sx={{ fontSize: 'large' }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default GameCard;
