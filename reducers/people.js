// reducers/people.js
import { ADD_PERSON, DELETE_PERSON } from '../constants';

const initialState = { people: [{ name: 'Chris' }] }

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
    default:
      return state;
  }
}
