import React, { Component } from 'react';
import './index.css';
import './App.css';
import Card from './components/Card';
import { randomId } from './utils';
import { initialState } from './constants';

class App extends Component {
  state = {
    elements: initialState
  };

  // added a field parameter to reuse method for updateName, updateHitpoints, and updateInitiative
  updateField = (id, e, field) => {
    const { value } = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index][field] = value;
    this.setState({ elements });
  };

  updateInitiative = (id, e) => {
    // debounce function using setTimeout instead of _lodash lib
    clearTimeout(this.timeout);
    this.updateField(id, e, 'initiative');
    this.timeout = setTimeout(() => this.sortElements(), 500);
  };

  sortElements = () => {
    const { elements } = this.state;
    this.setState({
      elements: elements.sort((a, b) => b.initiative - a.initiative)
    });
  };

  addCard = () => {
    const { elements } = this.state;
    elements[elements.length] = {
      // id: elements.length + 1,
      id: randomId(),
      name: `Player ${elements.length + 1}`,
      initiative: -100,
      hitpoints: 32
    };
    this.setState({
      elements: elements.sort((a, b) => b.initiative - a.initiative)
    });
  };

  removeElement = id => {
    let { elements } = this.state;
    elements = elements.filter(el => el.id !== id);
    this.setState({ elements });
  };

  render() {
    const { elements } = this.state;
    return (
      <div className="container">
        <h1>Dungeons & Dragons Turn Tracker</h1>
        <button onClick={this.addCard}>add</button>
        {elements.map(element => (
          <Card
            key={element.id}
            name={element.name}
            id={element.id}
            initiative={element.initiative}
            hitpoints={element.hitpoints}
            onInitiativeChange={this.updateInitiative}
            onUpdateField={this.updateField}
            onRemove={this.removeElement}
          />
        ))}
      </div>
    );
  }
}

export default App;
