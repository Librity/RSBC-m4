import React, { Component } from 'react';

import profile from '../assets/myAvatar.png';

class TechList extends Component {
  state = {
    techs: ['Node.js', 'ReactJS', 'React Native'],
  };

  render() {
    console.log(this.state);
    return [
      <h1>Howdy Partner!!!🤠</h1>,
      <img src={profile} />,
      <ul>
        <li>Node.js</li>
        <li>ReactJS</li>
        <li>React Native</li>
      </ul>,
    ];
  }
}

export default TechList;
