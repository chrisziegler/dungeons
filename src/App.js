import React, { Component } from 'react';
import './index.css';
import './App.css';
import Card from './Card';

class App extends Component {
  state = {
    elements: [
      {
        id: 1,
        name: 'Player 1',
        initiative: 20,
        hitpoints: 10
      },
      {
        id: 2,
        name: 'Player 2',
        initiative: 19,
        hitpoints: 16
      },
      {
        id: 3,
        name: 'Player 3',
        initiative: 18,
        hitpoints: 20
      },
      {
        id: 4,
        name: 'Player 4',
        initiative: 16,
        hitpoints: 32
      }
    ]
  };
  updateName = (id, e) => {
    const { value } = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].name = value;
    this.setState({ elements });
  };

  updateHitpoints = (id, e) => {
    const { value } = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].hitpoints = Number(value);
    this.setState({ elements });
  };

  updateInitiative = (id, e) => {
    clearTimeout(this.timeout);
    const { value } = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].initiative = Number(value);
    this.setState({ elements });
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
      id: elements.length + 1,
      name: `Player ${elements.length + 1}`,
      initiative: 12,
      hitpoints: 32
    };
    this.setState({
      elements: elements.sort((a, b) => b.initiative - a.initiative)
    });
  };

  render() {
    const { elements } = this.state;
    return (
      <div className="container">
        <button onClick={this.addCard}>add</button>
        {elements.map(element => (
          <Card
            key={element.id}
            name={element.name}
            id={element.id}
            initiative={element.initiative}
            hitpoints={element.hitpoints}
            onNameChange={this.updateName}
            onInitiativeChange={this.updateInitiative}
            onHitpointsChange={this.updateHitpoints}
          />
        ))}
      </div>
    );
  }
}

export default App;
