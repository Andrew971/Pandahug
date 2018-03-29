import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';


export default class Chatbox extends Component {
  constructor() {
      super()
      this.state = {
          status: false
      }
  }

  mytoggle = () => {
      this.setState({ status: !this.state.status })
  }


  render() {
const {steps}=this.props

      return (
    <ChatBot steps={steps} opened={this.state.status} floating={true} hideBotAvatar={true} hideHeader={false} toggleFloating={() => { this.mytoggle() }} />
      )
    }
}
