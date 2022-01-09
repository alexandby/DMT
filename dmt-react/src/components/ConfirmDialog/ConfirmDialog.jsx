import { removeGame } from '../../redux/actions/gamesActions';
import { hideConfirm } from '../../redux/actions/confirmActions';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

import React, { Component } from 'react';

import { connect } from 'react-redux';

class ConfirmDialog extends Component {
  remove(id) {
    this.props.removeGame(id);
    this.props.hideConfirm();
  }
  cancel() {
    this.props.hideConfirm();
  }
  render() {
    return (
      <div>
        <Dialog
          open={this.props.showDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Changes will no longer be reversible.'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure? Think about it.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.cancel()}>Cancel</Button>
            <Button onClick={() => this.remove(this.props.gameId)} autoFocus>
              Yes. Do that!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showDialog: state.confirm.isAskedAboutConfirm,
  gameId: state.confirm.gameId,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeGame: (id) => dispatch(removeGame(id)),
    hideConfirm: () => dispatch(hideConfirm()),
  };
};

ConfirmDialog.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDialog);
