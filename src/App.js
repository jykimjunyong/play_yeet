import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <button onClick={this.playAudio}>
          <span>Play Yeet Joon!</span>
        </button>
        <audio className="audio-element">
          <source src="yeet.mp3"></source>
        </audio>
      </div>
    )
  }
}

export default App;
