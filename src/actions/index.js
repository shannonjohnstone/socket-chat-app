export function userJoinedAction(payload) {
  return {
    type: 'USER_JOINED',
    payload
  };
}

export function formUpdateAction(payload) {
  return {
    type: 'FORM_UPDATE',
    payload
  };
}

export function formClearAction(payload) {
  return {
    type: 'FORM_CLEAR',
    payload
  };
}

export function formCurrentForm(form) {
  return {
    type: 'FORM_CURRENT',
    form
  };
}
