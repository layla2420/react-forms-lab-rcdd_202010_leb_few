import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:""
    };
  }
  handleInputChange=()=>{
      this.setstate({
      message:event.target.value

    })

  }

  render() {
    let charNumber=this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onchange={event=>this.handleInputChange(event)} value={this.state.message}/>
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
