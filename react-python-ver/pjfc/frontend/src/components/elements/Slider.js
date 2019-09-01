import React, { Component } from "react";

export class Slider extends Component {
  render() {
    return (
      <div className="form-group shadow-textarea">
        <input
          data-tip data-for="SliderTips"
          type="range"
          className="Slider"
          min="0"
          max="100"
          step="1"
          id="Slider"
        />
      </div>
    );
  }
}

export default Slider;
