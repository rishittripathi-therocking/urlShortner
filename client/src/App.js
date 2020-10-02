import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    url: '',
    link: ''
  };
  handleChange = (e) => {
    this.setState(({
      url: e.target.value
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/shorten', {
      url: this.state.url
    })
    .then( res => {
      console.log(res);
    })
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
            <fieldset>
              <input 
                type="text" 
                name="url" 
                placeholder="Enter url using the http(s) protocol" 
                onChange={this.handleChange}
                />
              <input type="submit" value="shorten" />
            </fieldset>
            <fieldset>
                <span id="result"> {this.state.link}</span>
          </fieldset>
        </form>
         
      </div>
    );
  }
}

export default App;
