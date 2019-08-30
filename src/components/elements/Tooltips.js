import React, { Component } from "react";
import ReactToolTip from "react-tooltip";

export class Tooltips extends Component {
  render() {
    return (
      <div>
        <ReactToolTip id="TextAreaTips" effect="solid" delayShow={100} />
        <ReactToolTip id="SliderTips" effect="solid" />
        <ReactToolTip id="MemoryTips" effect="solid" />
        <ReactToolTip id="NetMemoryTips" effect="solid" />
        <ReactToolTip id="USBMemoryTips" effect="solid" />
        <ReactToolTip id="ButtonTips" effect="solid" />
      </div>
    );
  }
}

export default Tooltips;
