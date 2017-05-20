// actions.js

import {
  ADD_PERSON, DELETE_PERSON,
  FETCH_PEOPLE, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_FAILURE
} from './constants';

export function addPerson(person) {
  return {
    type: ADD_PERSON,
    person,
  };
}

export function deletePerson(person) {
  return {
    type: DELETE_PERSON,
    person,
  };
}

function fetchPeople() {
  return {
    type: FETCH_PEOPLE,
  }
}

function fetchPeopleSuccess(people) {
  console.log('people:', people);
  return {
    type: FETCH_PEOPLE_SUCCESS,
    people,
  }
}

function fetchPeopleFailure() {
  return {
    type: FETCH_PEOPLE_FAILURE,
  }
}

export function fetchFromAPI() {
  return (dispatch) => {
    dispatch(fetchPeople());
    fetch('https://swapi.co/api/people/')
      .then(data => data.json())
      .then(json => dispatch(fetchPeopleSuccess(json.results)))
      .catch(() => dispatch(fetchPeopleFailure()));
  }
}
