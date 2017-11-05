import React from 'react';
import Grid from 'material-ui/Grid';

import ottoRadio from '../img/ottoradio.png';
import SignupForm from '../components/SignupForm';

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
    const data = this.state;
    const dbCon = this.props.db.database().ref('/signups');
    dbCon.push({
      data,
    });
  }
  render() {
    return (
      <div className='Book-form'>
        <img src={ottoRadio} alt='Otto Radio' />
        <Grid container spacing={8} className='Form-container'>
          <Grid item xs={12}>
            <h1>Listen to City of Thieves free now.</h1>
            <p>Try Otto Radio Unlimited free for 7 days.<br />Cancel any time.</p>
            <SignupForm
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
              password={this.state.password}
              handleChange={this.handleChange}
              submitForm={this.submitForm}
              checkFields={this.checkFields}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
