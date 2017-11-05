import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default class SignupsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signups: [],
    };

    const app = this.props.db.database().ref('signups');
    app.on('value', (snapshot) => {
      this.getData(snapshot.val());
    });
  }

  getData(values) {
    const signupsVal = values;
    const signups = _(signupsVal)
      .keys()
      .map((signupKey) => {
        const cloned = _.clone(signupsVal[signupKey]);
        delete cloned.password;
        return cloned;
      })
      .value();
    this.setState({
      signups,
    });
  }
  render() {
    return (
      <pre>{JSON.stringify(this.state.signups)}</pre>
    );
  }
}

SignupsContainer.propTypes = {
  db: PropTypes.objectOf({
    database: PropTypes.func.isRequired,
  }).isRequired,
};
