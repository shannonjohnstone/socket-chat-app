import React from 'react';
import { arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';
import { Header, SideMenu, ReferralBanner } from '../../components';
import ChatWindow from './components/ChatWindow';

const Chat = props => [
  <SideMenu />,
  <main className="l-main">
    <Header size="small" position="fixed" container={false} navType="chat" />
    <ReferralBanner />
    <ChatWindow messages={props.messages} />
  </main>
];

Chat.propTypes = {
  messages: arrayOf(object).isRequired
};

const mapStateToProps = store => ({
  messages: store.app.messages
});

export default connect(mapStateToProps)(Chat);
