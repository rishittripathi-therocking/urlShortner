import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    url: '',
    link: ''
  }
  render() {
    return (
      <div className="App">
         <fieldset>
           <input type="text" name="url" placeholder="Enter url using the http(s) protocol" />
           <input type="submit" value="shorten" />
         </fieldset>
         <fieldset>
            <span id="result"> {this.state.link}</span>
         </fieldset>
      </div>
    );
  }
}

export default App;
