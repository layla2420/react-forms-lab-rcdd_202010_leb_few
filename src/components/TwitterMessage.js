import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  const handleInputChange=()=>{
      this.state({
      [event.target.name]=event.target.value

    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onchange={event=>this.handleInputChange(event)}/>
      </div>
    );
  }
}

export default TwitterMessage;
