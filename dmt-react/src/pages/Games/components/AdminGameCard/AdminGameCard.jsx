import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from '@mui/material';
import { AdminBox, AdmInput, BtnBox, PlayersTyp } from './StyledComponents';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

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
          <AdminBox className="box" component="form" onSubmit={this.handleSubmit}>
            <PlayersTyp variant="subtitle2">Logo:</PlayersTyp>
            <AdmInput
              id="logo-input"
              onChange={this.handleChange}
              name="logo"
              type="text"
              value={this.state.gameEditState.logo}
              disableUnderline
            />
            <PlayersTyp variant="subtitle2">Name:</PlayersTyp>
            <AdmInput
              id="name-input"
              onChange={this.handleChange}
              name="name"
              type="text"
              value={this.state.gameEditState.name}
              autoComplete="off"
              disableUnderline
            />
            <PlayersTyp variant="subtitle2">Map:</PlayersTyp>
            <AdmInput
              type="text"
              onChange={this.handleChange}
              value={this.state.gameEditState.cardMap}
              autoComplete="off"
              name="cardMap"
              disableUnderline
            />
            <PlayersTyp variant="subtitle2">Max Players:</PlayersTyp>
            <AdmInput
              type="number"
              onChange={this.handleChange}
              value={this.state.gameEditState.maxPlayers}
              autoComplete="off"
              name="maxPlayers"
              disableUnderline
            />
            <PlayersTyp variant="subtitle2">Required Rank:</PlayersTyp>
            <AdmInput
              type="text"
              onChange={this.handleChange}
              value={this.state.gameEditState.rank}
              autoComplete="off"
              name="rank"
              disableUnderline
            />
            <BtnBox>
              <Button type="submit" color="inherit">
                {this.props.index ? <SaveIcon /> : <AddIcon />}
              </Button>
            </BtnBox>
          </AdminBox>
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
