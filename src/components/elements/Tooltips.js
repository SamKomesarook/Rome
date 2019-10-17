import React, { Component } from "react";
import ReactToolTip from "react-tooltip";
import HelpSection from "./HelpSection";

export class Tooltips extends Component {
  render() {
    return (
      <div>
        {/* https://github.com/wwayne/react-tooltip */}
        {/* <ReactToolTip id="TextAreaTips" effect="solid" delayShow={100}>
          <span>Text Area Tips</span>
        </ReactToolTip>

        <ReactToolTip id="SliderTips" place="left" effect="solid" />
        <ReactToolTip id="MemoryTips" effect="solid" />
        <ReactToolTip id="NetMemoryTips" effect="solid" />
        <ReactToolTip id="USBMemoryTips" effect="solid" />

        <ReactToolTip id="ButtonRun" place="left" effect="solid">
          <span>Run Tips</span>
        </ReactToolTip>

        <ReactToolTip id="ButtonStop" place="bottom" effect="solid">
          <span>Stop Tips</span>
        </ReactToolTip>

        <ReactToolTip id="ButtonHideShow" place="right" effect="solid">
          <span>Hide Show Tips</span>
        </ReactToolTip>

        <ReactToolTip id="ButtonInfo" effect="solid">
          <span>Info Tips</span>
        </ReactToolTip> */}

        <ReactToolTip id="ButtonHelp" place="bottom" effect="solid">
          <HelpSection />
        </ReactToolTip>

        {/* <ReactToolTip id="DashboardArea" place="top" effect="solid">
          <span>Dashboard Output Tips</span>
        </ReactToolTip>

        <ReactToolTip id="AnimationArea" place="top" effect="solid">
          <span>This is Animation Area</span>
        </ReactToolTip>

        <ReactToolTip id="ComponentArea" place="top" effect="solid">
          <span>This is Component Area</span>
        </ReactToolTip> */}
      </div>
    );
  }
}

export default Tooltips;
