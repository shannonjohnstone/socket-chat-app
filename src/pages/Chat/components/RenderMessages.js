import React from 'react';
import { capitalizeFirstLetter } from '../../../helpers/strings';
import { messageType } from '../helpers/renderMessage';

const RenderMessages = ({ messages }) => (
  messages.map(message => (
    <div className="c-chat__content">
      <p><span className="c-chat__name">{capitalizeFirstLetter(message.from)}</span> <span className="c-chat__time">{message.createAt}</span></p>
      {messageType(message)}
    </div>
  ))
);

export default RenderMessages;
