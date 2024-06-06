import React, { Component } from "react";

class Genie extends Component {
  render() {
    const { width, height, allow, src } = this.props;
    return (
      <iframe
        title="Chatbot Interface"
        width={width}
        height={height}
        allow={allow}
        src={src}
      />
    );
  }
}

class Chat extends Component {
  render() {
    return (
      <div>
        <Genie
          width="350"
          height="430"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/e1b9dd70-f372-4cf4-aa48-a34b35869e6f"
        />
        <h1>Hi, I am your Chatbot, Genie</h1>
      </div>
    );
  }
}

export default Chat;
