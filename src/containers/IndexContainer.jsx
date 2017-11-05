import React from 'react';
import PropTypes from 'prop-types';

import FormContainer from './FormContainer';
import player from '../img/player.png';

export default class IndexContainer extends React.Component {
  state = {
    signupSuccess: false,
  };
  signupDone = () => {
    this.setState({
      signupSuccess: true,
    });
  }
  render() {
    return (
      <div className='App'>
        <FormContainer
          db={this.props.db}
          signupSuccess={this.state.signupSuccess}
          signupDone={this.signupDone}
        />
        <div className='Book-cover'>
          {
            this.state.signupSuccess &&
              <img src={player} alt='Listen to this book' />
          }
        </div>
      </div>
    );
  }
}

IndexContainer.propTypes = {
  db: PropTypes.shape({
    database: PropTypes.func.isRequired,
  }).isRequired,
};
