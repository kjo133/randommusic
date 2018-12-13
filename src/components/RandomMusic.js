import React from "react";
import * as data from "../synths.json";

class RandomMusic extends React.Component {
  constructor(props) {
    super(props);

    this.yesNo = this.yesNo.bind(this);
    this.favorYes = this.favorYes.bind(this);
    this.favorNo = this.favorNo.bind(this);
    this.getDrums = this.getDrums.bind(this);
    this.getSynth = this.getSynth.bind(this);
    this.getElectricGuitar = this.getElectricGuitar.bind(this);
    this.onClick = this.onClick.bind(this);
    this.getAcousticGuitar = this.getAcousticGuitar.bind(this);
    this.getBass = this.getBass.bind(this);
    this.state = {
      number: null,
      sythList: [],
      numSynths: null,
      acousticGuitar: null,
      bass: null,
      drums: null,
      electricGuitar: null
    };
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

  favorYes() {
    var answer = "";
    const num = 1 + Math.floor(Math.random() * 10);
    if (num >= 3) {
      answer = "yes";
    } else {
      answer = "no";
    }

    return answer;
  }

  favorNo() {
    var answer = this.favorYes();
    console.log("fav no " + answer);
    if (answer === "yes") {
      answer = "no";
    } else {
      answer = "yes";
    }
    return answer;
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

  getDrums() {
    var answer = this.yesNo();
    this.setState({
      drums: answer
    });
  }

  getAcousticGuitar() {
    var answer = this.favorYes();
    this.setState({
      acousticGuitar: answer
    });
  }

  getElectricGuitar() {
    var answer = this.yesNo();
    this.setState({
      electricGuitar: answer
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
    this.getElectricGuitar();
    this.getDrums();
    this.getBass();
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.onClick}>Get Your Random Music!</button>
        <div className="instrumentContainer">
          <div>
            <h3> Drums : {this.state.drums}</h3>
          </div>
          <div>
            <h3>
              Number of Synths: {this.state.numSynths} <br />
            </h3>
            <p>{this.state.synthList}</p>
          </div>
          <div>
            <h3>Acoustic Guitar: {this.state.acousticGuitar}</h3>
          </div>
          <div>
            <h3>Electric Guitar: {this.state.electricGuitar}</h3>
          </div>
          <div>
            <h3>Bass Guitar: {this.state.bass}</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default RandomMusic;
