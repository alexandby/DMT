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
    isOpen: false,
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleChange = (event) => {
    const editedGame = {
      ...this.props.game,
    };
    this.props.editGame(this.props.index, editedGame);
  };
  render() {
    return (
      <>
        <Modal open={this.state.isOpen} onClose={this.handleClose}>
          <Box sx={style} component="form" onSubmit={this.handleClose}>
            <Input
              onChange={this.handleChange}
              name="logo"
              type="text"
              value={this.props.game.logo}
            />
            <Input
              onChange={this.handleChange}
              name="name"
              type="text"
              value={this.props.game.name}
            />
            <TextField
              onChange={this.handleChange}
              name="details"
              type="text"
              value={this.props.game.details}
            />
            <Input
              onChange={this.handleChange}
              name="map"
              type="text"
              value={this.props.game.cardMap}
            />
            <InputLabel />
            <Input
              id="sign-players"
              type="text"
              value="0"
              autoComplete="off"
              name="Sign Players"
              disabled
            />
            <Input
              onChange={this.handleChange}
              name="max players"
              type="text"
              value={this.props.game.maxPlayers}
            />
            <Input
              onChange={this.handleChange}
              name="rank"
              type="text"
              value={this.props.game.rank}
            />
            <Input
              type="text"
              inputRef={this.startTimeRef}
              placeholder="Start time"
              autoComplete="off"
              name="starttime"
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
