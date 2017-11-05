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
    invalidEmail: false,
    emailInDatabase: false,
  }
  handleChange = field => (event) => {
    this.setState({
      [field]: event.target.value,
    });
  }
  checkEmail(email) {
    const filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
      return false;
    }
    return true;
  }
  checkFields = () => {
    return this.state.email.length > 0 && this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 && this.state.password.length > 0;
  }
  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      invalidEmail: false,
      emailInDatabase: false,
    });
    if (this.checkEmail(this.state.email) === false) {
      this.setState({
        invalidEmail: true,
      });
      return;
    }
    const dbCon = this.props.db.database().ref('/signups');
    dbCon.orderByChild('email')
      .equalTo(this.state.email)
      .on('value', (snapshot) => {
        if (snapshot.numChildren() > 0) {
          this.setState({
            emailInDatabase: true,
          });
          return;
        }
        dbCon.push({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
        });
        this.props.signupDone();
      });
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
                  invalidEmail={this.state.invalidEmail}
                  emailInDatabase={this.state.emailInDatabase}
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
