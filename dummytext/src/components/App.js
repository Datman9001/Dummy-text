import React, { Component } from 'react'
import DummyTextAll from './dummyText/DummyTextAll.js';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
      <h3 className='center white-text'>Dummy Text Generator</h3>
      <div className="row">
          <div className="s6 offset-s3">
          <DummyTextAll/>
          </div>
      </div>

     
        
      </div>
    )
  }
}
