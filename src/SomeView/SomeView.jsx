import React, { Component } from "react";
import TextareaWrapper from "../TextareaWrapper/TextareaWrapper";
import { wrap } from "lodash";

class SomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isTextEntered: false
    };
  }

  onChange = value => {
    this.setState({ value: value });
  };

  wrapperFunc = (wrappedFunc, ...args) => {
    this.setState({ isTextEntered: true }, () => wrappedFunc(...args));
  };

  render() {
    return (
      <div>
        <TextareaWrapper
          value={this.state.value}
          onChange={wrap(this.onChange, this.wrapperFunc)}
        />
        {this.state.isTextEntered && <span>Text been entered</span>}
      </div>
    );
  }
}

export default SomeView;
