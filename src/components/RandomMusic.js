import React from "react";
import * as data from "../synths.json";

class RandomMusic extends React.Component {
  constructor(props) {
    super(props);
    this.getSynth2 = this.getSynth2.bind(this);

    this.yesNo = this.yesNo.bind(this);
    this.alteredYes = this.alteredYes.bind(this);
    this.getDrums = this.getDrums.bind(this);
    this.getSynth = this.getSynth.bind(this);

    this.onClick = this.onClick.bind(this);
    this.getAcousticGuitar = this.getAcousticGuitar.bind(this);
    this.getBass = this.getBass.bind(this);
    this.state = {
      number: null,
      sythList: [],
      numSynths: null,
      acousticGuitar: null,
      bass: null,
      drums: null
    };
  }

  getSynth2() {
    var s = [];
    for (var i = 0; i < data.synths.length; i++) {
      s.push(data.synths[i]);
      console.log(s[i]);
    }
  }

  getSynth() {
    var allSynths = [];
    for (var j = 0; j < data.synths.length; j++) {
      allSynths.push(data.synths[j]);
    }
    var numSynths = Math.floor(Math.random() * 4);
    var finalSynths = [];
    console.log("Number of Synths " + numSynths);
    for (var i = 0; i < numSynths; i++) {
      finalSynths[i] =
        allSynths[Math.floor(Math.random() * allSynths.length)] + " ";
      console.log("synth " + finalSynths[i]);
    }
    this.setState({
      numSynths,
      synthList: finalSynths
    });
  }

  yesNo() {
    var answer = "";
    const num = 1 + Math.floor(Math.random() * 2);
    if (num === 1) {
      answer = "yes";
    } else {
      answer = "no";
    }
    return answer;
  }

  alteredYes() {
    var answer = "";
    const num = 1 + Math.floor(Math.random() * 10);
    if (num >= 3) {
      answer = "yes";
    } else {
      answer = "no";
    }

    return answer;
  }

  getDrums() {
    var answer = this.yesNo();
    this.setState({
      drums: answer
    });
  }

  getAcousticGuitar() {
    var answer = this.alteredYes();
    this.setState({
      acousticGuitar: answer
    });
  }

  getBass() {
    var answer = this.yesNo();
    this.setState({
      bass: answer
    });
  }

  onClick() {
    this.getSynth();
    this.getAcousticGuitar();
    this.getDrums();
    this.getBass();
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Get Your Random Music!</button>
        <div className="instrument"><h3> Drums : {this.state.drums}</h3></div>
        
        <h3>Number of Synths: {this.state.numSynths}</h3>
        <p>{this.state.synthList}</p>
        <h3>Acoustic Guitar: {this.state.acousticGuitar}</h3>
        <h3>Bass Guitar: {this.state.bass}</h3>
      </div>
    );
  }
}
export default RandomMusic;
