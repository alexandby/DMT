import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button, Modal, Input, TextField, InputLabel } from '@mui/material';

class AdminGameCard extends Component {
  state = {
    gameEditState: {},
    isOpen: false,
  };

  componentDidMount() {
    this.setState({
      gameEditState: this.props.gameEdit,
    });
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };
  handleChange = (event) => {
    this.setState({
      gameEditState: {
        ...this.state.gameEditState,
        [event.currentTarget.name]: event.currentTarget.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.index === undefined
      ? this.props.addGame(this.state.gameEditState)
      : this.props.updateGame(this.state.gameEditState, this.props.index);
    this.props.modal();
  };

  render() {
    return (
      <>
        <Modal open>
          <Box className="box" component="form" onSubmit={this.handleSubmit}>
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
            <Button type="submit">{this.props.index ? 'Save' : 'Add'}</Button>
            <Typography id="modal-modal-description" className="mt">
              Edit current game or create something new!
            </Typography>
          </Box>
        </Modal>
      </>
    );
  }
}

export default AdminGameCard;

AdminGameCard.propTypes = {
  gameEdit: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string,
    details: PropTypes.string,
    rank: PropTypes.string,
    cardMap: PropTypes.string,
    signPlayers: PropTypes.number,
    maxPlayers: PropTypes.number,
  }),
  index: PropTypes.string,
  addGame: PropTypes.func,
  updateGame: PropTypes.func,
  modal: PropTypes.func,
};
