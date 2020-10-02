import React from 'react';
import axios from 'axios';
import validator from 'validator';
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
    const validURL=validator.isURL(this.state.url, {
      require_protocol: true
    });

    if(!validURL) {
      alert('Please ensure this url is a valid and contains http(s) protocol.');
    }
    else {
      console.log("URL is : ", this.state.url);
      axios.post('http://localhost:5000/api/shorten', {
        url: this.state.url
      })
      .then( res => {
        this.setState({
          link: `http://urlshortner/${res.data.hash}`
        })
      })
      .catch(err=> console.log(err));
    }
    
  };
  render() {
    return (
      <div className="container">
        <div  className="body-wrap">
          <header>
            <h1>
              <span className="highlight" > url</span>shortner
            </h1>
            <small>...free and always will be</small>
          </header>
          <main>
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
                <fieldset className={this.state.link!==''?'display-result':'hide-result'}>
                    <span id="result"> {this.state.link}</span>
              </fieldset>
            </form>
            
          </main>
        </div>
      </div>
    );
  }
}

export default App;
