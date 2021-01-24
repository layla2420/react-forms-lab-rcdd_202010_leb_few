import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:""
    };
  }
  const handleInputChange=()=>{
      this.setstate({
      message:event.target.value

    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onchange={event=>this.handleInputChange(event)} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
