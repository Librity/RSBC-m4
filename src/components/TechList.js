import React, { Component } from 'react';

import TechItem from './TechItem';

import profile from '../assets/myAvatar.png';

class TechList extends Component {
  state = {
    newTech: '',
    techs: ['Node.js', 'ReactJS', 'React Native'],
  };

  handleInputChange = e => {
    console.log(e.target.value);

    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state.newTech);
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    });
  };

  handleRemove = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    console.log(this.state);

    return (
      <>
        <h1>Howdy Partner!!!🤠</h1>,
        <img src={profile} />,<h2>{this.state.newTech}</h2>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map(tech => (
              <TechItem
                key={tech}
                tech={tech}
                onRemove={() => this.handleRemove(tech)}
              />
            ))}
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <button type="submit">Send!</button>
        </form>
      </>
    );
  }
}

export default TechList;
