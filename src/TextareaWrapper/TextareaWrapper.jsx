import React, { Component } from "react";
import PropTypes from "prop-types";

class TextareaWrapper extends Component {
  render() {
    return (
      <div>
        <textarea
          value={this.props.value}
          onChange={event => this.props.onChange(event.target.value)}
        />
      </div>
    );
  }
}

TextareaWrapper.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TextareaWrapper;
