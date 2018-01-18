const initialState = {
  status: 'unactive',
  chatroom: null,
  username: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'USER_JOINED':
      console.log(action.payload, 'action.payload');
      return {
        ...state,
        status: 'active',
        chatroom: action.payload.chatroom,
        username: action.payload.username
      };
    default: {
      return state;
    }
  }
}
