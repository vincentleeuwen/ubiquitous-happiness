import React from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';

import ottoRadio from '../img/ottoradio.png';
import SignupForm from '../components/SignupForm';
import SignupSuccess from '../components/SignupSuccess';

export default class FormContainer extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }
  handleChange = field => (event) => {
    this.setState({
      [field]: event.target.value,
    });
  }
  checkFields = () => {
    return this.state.email.length > 0 && this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 && this.state.password.length > 0;
  }
  submitForm = (e) => {
    e.preventDefault();
    const dbCon = this.props.db.database().ref('/signups');
    dbCon.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    });
    this.props.signupDone();
  }
  render() {
    return (
      <div className='Book-form'>
        <img src={ottoRadio} alt='Otto Radio' />
        <Grid container spacing={8} className='Form-container'>
          <Grid item xs={12}>
            {
              this.props.signupSuccess &&
                <SignupSuccess />
            }
            {
              !this.props.signupSuccess &&
                <SignupForm
                  firstName={this.state.firstName}
                  lastName={this.state.lastName}
                  email={this.state.email}
                  password={this.state.password}
                  handleChange={this.handleChange}
                  submitForm={this.submitForm}
                  checkFields={this.checkFields}
                />
            }
          </Grid>
        </Grid>
      </div>
    );
  }
}

FormContainer.propTypes = {
  signupDone: PropTypes.func.isRequired,
  signupSuccess: PropTypes.bool.isRequired,
  db: PropTypes.objectOf({
    database: PropTypes.func.isRequired,
  }).isRequired,
};
