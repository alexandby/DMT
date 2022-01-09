import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateGame } from '../../../../redux/actions/gamesActions';
import { Formik } from 'formik';
import * as yup from 'yup';

import PropTypes from 'prop-types';
import { Button, Modal } from '@mui/material';
import { AdminBox, AdmInput, BtnBox, PlayersTyp, ValidationTyp } from './StyledComponents';
import SaveIcon from '@mui/icons-material/Save';

class AdminGameCard extends Component {
  render() {
    return (
      <>
        <Formik
          initialValues={this.props.gameEdit}
          validateOnBlur
          onSubmit={(values) => this.props.updateGame(values)}
          validationSchema={yup.object().shape({
            logo: yup.string().required('Input logo URL in this field. Please.'),
            name: yup.string().required('Input name in this field. Please.'),
            cardMap: yup.string().required('Input cardMap URL in this field. Please.'),
            maxPlayers: yup
              .number()
              .positive()
              .integer()
              .required('Count all your players. Please.'),
            rank: yup.string().required('Input rank URL in this field. Please.'),
          })}
        >
          {({
            values,
            errors,
            isValid,
            touched,
            dirty,
            handleBlur,
            handleSubmit,
            handleChange,
          }) => (
            <Modal open>
              <AdminBox className="box" component="form">
                <PlayersTyp variant="subtitle2">Logo:</PlayersTyp>
                <AdmInput
                  id="logo-input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="logo"
                  type="text"
                  value={values.logo}
                  disableUnderline
                />
                {touched.logo && errors.logo && (
                  <ValidationTyp variant="subtitle2">{errors.logo}</ValidationTyp>
                )}
                <PlayersTyp variant="subtitle2">Name:</PlayersTyp>
                <AdmInput
                  id="name-input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="name"
                  type="text"
                  value={values.name}
                  autoComplete="off"
                  disableUnderline
                />
                {touched.name && errors.name && (
                  <ValidationTyp variant="subtitle2">{errors.name}</ValidationTyp>
                )}
                <PlayersTyp variant="subtitle2">Map:</PlayersTyp>
                <AdmInput
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cardMap}
                  autoComplete="off"
                  name="cardMap"
                  disableUnderline
                />
                {touched.cardMap && errors.cardMap && (
                  <ValidationTyp variant="subtitle2">{errors.cardMap}</ValidationTyp>
                )}
                <PlayersTyp variant="subtitle2">Max Players:</PlayersTyp>
                <AdmInput
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.maxPlayers}
                  autoComplete="off"
                  name="maxPlayers"
                  disableUnderline
                />
                {touched.maxPlayers && errors.maxPlayers && (
                  <ValidationTyp variant="subtitle2">{errors.maxPlayers}</ValidationTyp>
                )}
                <PlayersTyp variant="subtitle2">Required Rank:</PlayersTyp>
                <AdmInput
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.rank}
                  autoComplete="off"
                  name="rank"
                  disableUnderline
                />
                {touched.rank && errors.rank && (
                  <ValidationTyp variant="subtitle2">{errors.rank}</ValidationTyp>
                )}
                <BtnBox>
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    color="inherit"
                    disabled={!(isValid && dirty)}
                  >
                    <SaveIcon />
                  </Button>
                </BtnBox>
              </AdminBox>
            </Modal>
          )}
        </Formik>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateGame: (game) => dispatch(updateGame(game)),
  };
};

export default connect(null, mapDispatchToProps, null, { forwardRef: true })(AdminGameCard);

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
