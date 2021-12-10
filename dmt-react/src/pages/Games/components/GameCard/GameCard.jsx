import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Grid,
  Collapse,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EditIcon from '@mui/icons-material/Edit';
import { Component } from 'react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

class GameCard extends Component {
  state = {
    expanded: false,
  };
  handleExpandClick = () => {
    this.setState((oldState) => ({
      expanded: !oldState.expanded,
    }));
  };
  render() {
    const { id, logo, name, signPlayers, maxPlayers, rank, cardMap } = this.props.details;
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
            width: 'auto',
          }}
          component="img"
          height="194"
          image={logo}
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
                {signPlayers}
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
                {maxPlayers}
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
              <CardMedia sx={{ marginTop: 0.5 }} component="img" image={rank} alt="card rank img" />
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
          <ExpandMore
            expand={this.state.expanded}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="show more"
          >
            <MoreHorizIcon />
          </ExpandMore>
          <IconButton
            aria-label="delete game card"
            sx={{ fontSize: 'large' }}
            onClick={() => this.props.onDelete(id)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="play current game">
            <PlayArrowIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent
            sx={{
              background: 'linear-gradient(90deg, #ff0000, #fffb00)',
              py: 0,
            }}
          >
            <Typography variant="subtitle2" sx={{ fontFamily: 'Montserrat' }} editable="true">
              Name: {name}
            </Typography>
            <Grid container>
              <Grid item xs={6} sx={{ pb: '16px' }}>
                <Typography variant="subtitle2" sx={{ fontFamily: 'Montserrat', padding: 1 }}>
                  Map:
                </Typography>
                <CardMedia component="img" image={cardMap} alt="card map img" />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2" sx={{ fontFamily: 'Montserrat', padding: 1 }}>
                  Created by:
                </Typography>
                <IconButton aria-label="play current game">
                  <CardMedia component="img" image="/img/death.png" />
                </IconButton>
                <Typography variant="subtitle2" sx={{ fontFamily: 'Montserrat', padding: 1 }}>
                  Edit
                </Typography>
                <IconButton aria-label="edit current game" onClick={() => this.props.onEdit(id)}>
                  <EditIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}
export default GameCard;
