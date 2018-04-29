import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const SignUpPage = () =>
  <div>
    <h1>Sign Up</h1>
    <SignUpForm />
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
})

class SignUpForm extends Component
{

  constructor(props)
  {
    super(props);

    this.state = {INITIAL_STATE};
  }

  onSubmit = (event) => {

  }

  render() 
  {

    const 
    {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    return(
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Username"
        />
        <input 
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />

      </ form>
    );
  }
}// signUpForm

const SignUpLink = () =>
  <p>
    Don't have an account?account
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default SignUpPage;

export {
  SignUpForm,
  SignUpLink,
}