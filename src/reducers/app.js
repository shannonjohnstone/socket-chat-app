const initialState = {
  messages: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'NEW_MESSAGE':
      console.log(action, "action");
      return {
        ...state,
        messages: [...state.messages, action.data]
      }
    default: {
      console.log('default...');
      return state
    }
  }
}
