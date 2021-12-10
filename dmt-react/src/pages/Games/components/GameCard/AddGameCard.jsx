import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button, Modal, Input, TextField, InputLabel } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

class AddGameCard extends Component {
  static propTypes = {
    addGame: PropTypes.func,
  };
  state = {
    game: { id: `game7`, signPlayers: 0 },
    isOpen: false,
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };
  handleChange = (event) => {
    this.setState({
      game: { ...this.state.game, [event.target.name]: event.target.value },
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isOpen: false });
    this.props.addGame(this.state.game);
  };
  render() {
    return (
      <>
        <Button
          variant="contained"
          sx={{ mt: '1rem', width: 200, height: 50 }}
          onClick={this.handleOpen}
        >
          ADD GAME
        </Button>
        <Modal open={this.state.isOpen} onClose={this.handleSubmit}>
          <Box sx={style} component="form" onSubmit={this.handleSubmit}>
            <Input
              id="logo-input"
              onChange={this.handleChange}
              name="logo"
              type="text"
              placeholder="Logo"
            />
            <Input
              id="name-input"
              onChange={this.handleChange}
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="off"
            />
            <TextField
              onChange={this.handleChange}
              id="details-input"
              name="details"
              type="text"
              placeholder="Details"
              autoComplete="off"
            />
            <Input
              type="text"
              onChange={this.handleChange}
              placeholder="Image"
              autoComplete="off"
              name="cardMap"
            />
            <InputLabel />
            <Input
              id="sign-players"
              type="text"
              onChange={this.handleChange}
              value="0"
              autoComplete="off"
              name="signPlayers"
              disabled
            />
            <Input
              type="text"
              onChange={this.handleChange}
              placeholder="Max Players"
              autoComplete="off"
              name="maxPlayers"
            />
            <Input
              type="text"
              onChange={this.handleChange}
              placeholder="Rank"
              autoComplete="off"
              name="rank"
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
