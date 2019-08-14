import React, { Component } from "react";

 export class Slider extends Component {
  render() {
    return (
		<div class="form-group shadow-textarea">
            <input type="range" class="Slider" min="0" max="100" step="1" id="Slider"/>
        </div>
    );
  }
}

 export default Slider;