import React from 'react';
import logo from './logo.svg';
import './App.css';

const Body = (props) => {
  return (
    <div>
      <div>
        {props.textDisplay}

      </div>
      <div>
        {props.text2}

      </div>
      <div>
        {props.addFunc(1, 2)}
      </div>
    </div>

  );
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.props.theFunc(11, 6)}
          </p>
          <p>
            {this.props.title}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.num}
          </a>

        </header>
      </div>
    )
  }
}

class App extends React.Component {
  add(a, b) {
    return a + b;
  }
  render() {
    return (
      <div className="App" >
        <Header title='render' num={5} myObj={{ a: 5, b: 6 }} theFunc={this.add} />

        <Body textDisplay='i am a programmer' text2='the duality of man' addFunc={this.add} />
        <Body textDisplay='hackermans' text2='yinyang' addFunc={this.add} />
        <Body textDisplay='software engineer' text2='reasoned choice' addFunc={this.add} />
      </div>
    );
  }

}

export default App;
