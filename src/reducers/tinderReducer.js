import { FETCH_CATS, ADD_LIKE, ADD_DISLIKE } from '../actions/actionTypes';

const initialState = {
  cats: [],
  likes: {},
  dislikes: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CATS:
      return {
        ...state,
        cats: action.payload
      };
    case ADD_LIKE:
      return {
        ...state,
        likes: { ...state.likes, [action.id]: action.payload }
      };
    case ADD_DISLIKE:
      return {
        ...state,
        dislikes: { ...state.dislikes, [action.id]: action.payload }
      };
    default:
      return state;
  }
};
