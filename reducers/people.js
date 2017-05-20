// reducers/people.js
import {
  ADD_PERSON,
  DELETE_PERSON,
  FETCH_PEOPLE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE
} from '../constants';

const initialState = {
  isFetching: false,
  error: false,
  people: [],
}

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return {
        people: [...state.people, action.person],
      };
    case DELETE_PERSON:
      return {
        people: state.people.filter(p => p.name !== action.person.name),
      };
    case FETCH_PEOPLE:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_PEOPLE_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        people: action.people,
      }
    }
    case FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      }
    default:
      return state;
  }
}
