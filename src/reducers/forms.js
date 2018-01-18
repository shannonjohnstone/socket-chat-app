import _set from 'lodash.set';
import _unset from 'lodash.unset';

export default function (state = {}, action) {
  switch (action.type) {
    case 'FORM_UPDATE':
      return {
        ...state,
        ..._set(state, action.payload.path, action.payload.value)
      };
    case 'FORM_CLEAR':
      return {
        ...state,
        ..._unset(state, 'currentForm'),
        ..._unset(state, action.payload.form)
      };
    case 'FORM_CURRENT':
      return {
        ...state,
        currentForm: action.form
      };
    default: {
      return state;
    }
  }
}
