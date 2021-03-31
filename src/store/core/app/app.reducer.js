import { BOILERPLATE_ACTION_TYPE } from './app.actions';

const initialState = {
  boilerplate: {},
};

export default function AppReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case BOILERPLATE_ACTION_TYPE: {
      return {
        ...state,
        boilerplate: payload,
      };
    }
    default: {
      return state;
    }
  }
}
