import React, { Component } from "react";

export class Slider extends Component {
  render() {
    return (
		<div class="form-group shadow-textarea">
            <input type="range" class="Slider" min="0" max="5" step="0.5" id="Slider"/>
        </div>
    );
  }
}

export default Slider;
