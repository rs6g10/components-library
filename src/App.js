import React, { Component } from 'react';
import './App.css';
import Checkbox from './components/Checkbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Components Library</h1>
          <h3>Checkboxes</h3>
        </header>
        <div className="component-example">
          <div className="example-row">
            <div className="example">
              <span className="title">Default</span>
              <Checkbox label="Testing" onChange={(e) => console.log(e)} />
            </div>
          </div>
          <div className="example-row">
            <div className="example">
              <span className="title">Stacked</span>
              <div>
                <Checkbox label="Testing" value="testing" />
                <Checkbox label="One" value="one" />
                <Checkbox label="Two" value="two" />
              </div>
            </div>
          </div>
          <div className="example-row">
            <div className="example">
              <span className="title">Controlled</span>
              <div>
                <Checkbox label="Always On" value="on"
                          onChange={(e) => console.log(e)} checked />
                <Checkbox label="Always Off" value="off"
                          onChange={(e) => console.log(e)} checked={false} />
              </div>
            </div>
          </div>
          <div className="example-row">
            <div className="example">
              <span className="title">Disabled</span>
              <div>
                <Checkbox label="Disabled checked" checked disabled />
                <Checkbox label="Disabled unchecked" disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
