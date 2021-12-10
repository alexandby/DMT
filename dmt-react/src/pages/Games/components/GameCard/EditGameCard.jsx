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

class EditGameCard extends Component {
  state = {
    gameEditState: this.props.gameEdit,
  };
  handleChange = (event) => {
    const updatedGame = {
      ...this.state.gameEditState,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.setState({
      gameEditState: updatedGame,
    });
    this.props.updateGame(updatedGame, this.props.index);
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };
  //Was a problem with props in state, but it's gone
  // static getDerivedStateFromProps(props, state) {
  //   if (props.gameEdit.length !== state.gameEditState.length) {
  //     return {
  //       gameEditState: props.gameEdit,
  //     };
  //   }
  //   return null;
  // }

  render() {
    return (
      <>
        <Modal open onClose={this.props.closeModal}>
          <Box sx={style} component="form" onSubmit={this.handleSubmit}>
            <Input
              id="logo-input"
              onChange={this.handleChange}
              name="logo"
              type="text"
              value={this.state.gameEditState.logo}
            />
            <Input
              id="name-input"
              onChange={this.handleChange}
              name="name"
              type="text"
              value={this.state.gameEditState.name}
              autoComplete="off"
            />
            <TextField
              onChange={this.handleChange}
              id="details-input"
              name="details"
              type="text"
              value={this.state.gameEditState.details}
              autoComplete="off"
            />
            <Input
              type="text"
              onChange={this.handleChange}
              value={this.state.gameEditState.cardMap}
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
              value={this.state.gameEditState.maxPlayers}
              autoComplete="off"
              name="maxPlayers"
            />
            <Input
              type="text"
              onChange={this.handleChange}
              value={this.state.gameEditState.rank}
              autoComplete="off"
              name="rank"
            />
            <Button type="submit">Save</Button>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Modal form game edit
            </Typography>
          </Box>
        </Modal>
      </>
    );
  }
}

export default EditGameCard;
