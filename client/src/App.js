import React from 'react';
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
    axios.post('http://localhost:5000/api/shorten', {
      url: this.state.url
    })
    .then( res => {
      this.setState({
        link: `http://urlshortner/${res.data.hash}`
      })
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
