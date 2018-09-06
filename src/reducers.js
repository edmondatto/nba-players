import * as ACTION_TYPES from './actions'

const initiaState = {
  fetching: false,
  player: {},
  error: ""
};

export function reducer (state = initiaState, action) {
  switch (action.type) {
    case action.type === ACTION_TYPES.GET_PLAYER:
      return {
        ...state,
        loading: true
      };
    case action.type === ACTION_TYPES.GET_PLAYER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case action.type === ACTION_TYPES.GET_PLAYER_SUCCESS:
      return {
        ...state,
        loading: false,
        player: { ...action.payload },
      };
    default:
      return state;
  }
}