import React, { Component } from 'react';
import { Box, Typography, Button, Modal, Input, TextField, InputLabel } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

class AddGameCard extends Component {
  state = {
    isOpen: false,
  };
  logoRef = React.createRef();
  nameRef = React.createRef();
  detailsRef = React.createRef();
  imageRef = React.createRef();
  signPlayersRef = React.createRef();
  maxPlayersRef = React.createRef();
  rankRef = React.createRef();
  startTimeRef = React.createRef();

  handleOpen = () => {
    this.setState({ isOpen: true });
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };

  createGame = (event) => {
    event.preventDefault();
    const game = {
      logo: this.logoRef.current.value,
      name: this.nameRef.current.value,
      details: this.detailsRef.current.value,
      map: this.imageRef.current.value,
      signPlayers: parseFloat(this.signPlayersRef.current.value || 0),
      maxPlayers: parseFloat(this.maxPlayersRef.current.value || 0),
      rank: this.rankRef.current.value,
      startTime: this.startTimeRef.current.value,
    };
    this.props.addGame(game);
    this.handleClose();
    event.currentTarget.reset();
  };
  render() {
    return (
      <>
        <Button onClick={this.handleOpen}>+</Button>
        <Modal open={this.state.isOpen} onClose={this.handleClose}>
          <Box sx={style} component="form" onSubmit={this.createGame}>
            <Input
              id="logo-input"
              inputRef={this.logoRef}
              name="logo"
              type="text"
              placeholder="Logo"
            />
            <Input
              id="name-input"
              inputRef={this.nameRef}
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="off"
            />
            <TextField
              inputRef={this.detailsRef}
              id="details-input"
              name="details"
              type="text"
              placeholder="Details"
              autoComplete="off"
            />
            <Input
              type="text"
              inputRef={this.imageRef}
              placeholder="Image"
              autoComplete="off"
              name="map"
            />
            <InputLabel />
            <Input
              id="sign-players"
              type="text"
              inputRef={this.signPlayersRef}
              value="0"
              autoComplete="off"
              name="Sign Players"
              disabled
            />
            <Input
              type="text"
              inputRef={this.maxPlayersRef}
              placeholder="Max Players"
              autoComplete="off"
              name="maxplayers"
            />
            <Input
              type="text"
              ref={this.rankRef}
              placeholder="Rank"
              autoComplete="off"
              name="rank"
            />
            <Input
              type="text"
              inputRef={this.startTimeRef}
              placeholder="Start time"
              autoComplete="off"
              name="starttime"
            />
            <Button type="submit">Add</Button>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Modal form game create
            </Typography>
          </Box>
        </Modal>
      </>
    );
  }
}

export default AddGameCard;
