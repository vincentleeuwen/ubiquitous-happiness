import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const SignupForm = props => (
  <form noValidate autoComplete='off' onSubmit={props.submitForm}>
    <h1>Listen to City of Thieves free now.</h1>
    <p>Try Otto Radio Unlimited free for 7 days.<br />Cancel any time.</p>
    <TextField
      id='firstName'
      label='First name'
      value={props.firstName}
      onChange={props.handleChange('firstName')}
      margin='normal'
      required
    />
    <TextField
      id='lastName'
      label='Last name'
      value={props.lastName}
      onChange={props.handleChange('lastName')}
      margin='normal'
      required
    />
    <TextField
      id='email'
      label='Email'
      type='email'
      value={props.email}
      onChange={props.handleChange('email')}
      margin='normal'
      fullWidth
      required
    />
    <TextField
      id='password'
      label='Password'
      value={props.password}
      onChange={props.handleChange('password')}
      type='password'
      autoComplete='off'
      margin='normal'
      fullWidth
      required
    />
    <div className='Button-container'>
      {
        props.checkFields() &&
          <Button
            color='contrast'
            style={{ background: '#E52940' }}
            type='submit'
          >
            Sign Up
          </Button>
      }
      {
        !props.checkFields() &&
          <Button
            color='contrast'
            disabled
          >
            Sign Up
          </Button>
      }
    </div>
  </form>
);

SignupForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  checkFields: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default SignupForm;
