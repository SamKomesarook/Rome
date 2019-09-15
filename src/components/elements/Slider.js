import React, { Component } from "react";

export class Slider extends Component {
  constructor(props){
    super(props);
    this.state = {
      ref: this.props.compRef
    };
  }

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
          ref={this.state.ref}
        />
      </div>
    );
  }
}

export default Slider;
