import React from 'react';
import logo from './logo.svg';
import './App.css';

export const OptionList = (props) => (
  <select name={props.name} value={props.value} onChange={props.handleChange}>
    
  </select>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: 1}
  }
  playAudio = (event) => {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    console.log("Loop1 : " + this.state.value)
    for (var i = 0; i < this.state.value; i++) {
      setTimeout(() => {
        audioEl.play();
      }, i*1000);
    }
  }

  selectnum = (optionSelected) => {
    this.setState({value: optionSelected.target.value})
    console.log("Loop : " + this.state.value)
  }
  render() {

    const items = []

    for ( var i = 0; i < 10; i++ ) {
      items.push(<option key={i} value={i}>{i}</option>)
    }

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <select value={this.state.value} onChange={this.selectnum}>
          {items}
        </select> times
        <button onClick={this.playAudio}>
          <span>Play Yeet Joon!</span>
        </button>&nbsp;
        <audio className="audio-element">
          <source src="yeet.mp3"></source>
        </audio>
      </div>
    )
  }
}

export default App;
