import React from 'react'
import { arrayOf, object } from 'prop-types';
import { messaging } from '../../../modules';
import { clearInputValue } from '../../../helpers/form';
import { Button, FieldSet, FormGroup, FormInputAddonBtn } from '../../../components';
import RenderMessages from '../components/RenderMessages';

/* NOTE:
 * i want to have this here for now as they are only used in this component
 * and see what type of test coverage i can get before decide weather to export
 * them or to move them back into the container
 *
 * REASON: for this is that i having this methods in the stateless component will
 * cause them to be recreate on each re render so that is not good
 */

function handleSubmit(e) {
  const inputName = 'message';
  e.preventDefault();
  messaging.createMessage({ from: 'admin test', message: e.target[inputName].value });
  clearInputValue(inputName);
}

function handSendLocation() {
  messaging.geoLocation().catch(e => console.log(e, 'error result'))
}

const ChatWindow = ({ messages }) => {
  return (
    <section className="c-chat">
      <div className="list c-chat__list" id="displayed-messages">
        <div className="c-chat__content">
          <h1 className="c-chat__room-name">Technical Chat</h1>
        </div>
        <RenderMessages messages={messages} />
      </div>
      <div className="c-chat__buttons">
        <form onSubmit={handleSubmit}>
          <FieldSet>
            <FormGroup
              formInput={FormInputAddonBtn}
              name="message"
              labelText="Message text"
              labelHidden
            />
          </FieldSet>
        </form>
        <Button btnText="Location" onClick={handSendLocation} />
      </div>
    </section>
  );
};

ChatWindow.propTypes = {
  messages: arrayOf(object).isRequired
};

export default ChatWindow;
