import React, { Component } from 'react';
import { func } from 'prop-types';
import { history as historyPropType } from 'react-router-prop-types';
import { connect } from 'react-redux';
import { Header, Button, FieldSet } from '../../components';
import { userJoinedAction } from '../../actions';
import JoinForm from './forms/JoinForm';

class JoinContainer extends Component {
  constructor(props) {
    super(props);
    this.location = 'join';
  }
  handleSubmit = (e) => {
    const { history, dispatchUserJoinedAction } = this.props;
    const { username, chatroom } = e.target;
    dispatchUserJoinedAction({ username: username.value, chatroom: chatroom.value });
    history.push('/home');
    e.preventDefault();
  }
  render() {
    return (
      <main className="l-main">
        <Header title="Join Chatty" showNav={false} />
        <div className="l-container">
          <form onSubmit={this.handleSubmit}>
            <FieldSet>
              <JoinForm />
            </FieldSet>
            <Button type="submit" purpose="primary" btnText="Come on in" />
          </form>
        </div>
      </main>
    );
  }
}

JoinContainer.propTypes = {
  dispatchUserJoinedAction: func.isRequired,
  history: historyPropType.isRequired
};

export default connect(null, {
  dispatchUserJoinedAction: userJoinedAction
})(JoinContainer);
