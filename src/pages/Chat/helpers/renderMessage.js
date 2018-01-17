import React from 'react';

export function standardTextMessage(message) {
  return <p>{message.text}</p>;
}

export function locationMessage(message) {
  return <a href={message.url} target="_blank">My location</a>;
}

export function messageType(message) {
  switch (message.type) {
    case 'NEW_MESSAGE': {
      return standardTextMessage(message);
    }
    case 'NEW_LOCATION_MESSAGE': {
      return locationMessage(message);
    }
    default: {
      return standardTextMessage(message);
    }
  }
}
