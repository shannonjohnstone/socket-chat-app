import React from 'react';
import { FormGroup, FormInput } from '../../../components';
import { formManager, FormManagerInput } from '../../../modules/formManager';

const JoinForm = () => [
  <FormManagerInput
    labelText="User name"
    inputWrapper={FormGroup}
    formInput={FormInput}
    inputSize="md"
    name="username"
    placeholder="Please enter a user name"
  />,
  <FormManagerInput
    labelText="Chatty room"
    inputWrapper={FormGroup}
    formInput={FormInput}
    inputSize="md"
    name="chatroom"
    placeholder="Name of the chatty room you want to enter"
  />
];

export default formManager({
  form: 'chatty'
})(JoinForm);
