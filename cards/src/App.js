import React, { Component } from 'react';
import Feed from './Feed';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Feed />
      </div>
    );
  }
}
