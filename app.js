import React from 'react';
import { connect } from 'react-redux';
import { addPerson, deletePerson } from './actions';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

class App extends React.Component {
  state = {
    inputValue: '',
  }
  addPerson = () => {
    if (this.state.inputValue === '') return;
    this.props.dispatchAddPerson({
      name: this.state.inputValue,
    });
    this.setState({ inputValue: '' });
  }
  deletePerson = (person) => {
    this.props.dispatchdeletePerson(person)
  }
  updateInput = (inputValue) => {
    this.setState({ inputValue })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>People</Text>
        <TextInput
          onChangeText={text => this.updateInput(text)}
          style={styles.input}
          value={this.state.inputValue}
          placeholder="Name"
        />
        <TouchableHighlight
          underlayColor="#ffa012"
          style={styles.button}
          onPress={this.addPerson}
        >
          <Text style={styles.buttonText}>Add Person</Text>
        </TouchableHighlight>
        {
          this.props.people.map((person, index) => (
            <View key={index} style={styles.person}>
              <Text>Name: {person.name}</Text>
              <Text onPress={() => this.deletePerson(person)}>Delete Person</Text>
            </View>
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#e4e4e4',
    height: 55,
    borderRadius: 3,
    padding: 5,
    marginTop: 12,
  },
  button: {
    backgroundColor: '#ff9900',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
  },
  person: {
    marginTop: 12,
  },
});

function mapStateToProps (state) {
  return {
    people: state.people.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchAddPerson: (person) => dispatch(addPerson(person)),
    dispatchdeletePerson: (person) => dispatch(deletePerson(person))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
