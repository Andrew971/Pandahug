import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import './chatbot.css';
import {theme} from './theme';


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
    <ThemeProvider theme={theme}><ChatBot steps={steps} opened={this.state.status} floating={true} hideBotAvatar={true} hideHeader={false} toggleFloating={() => { this.mytoggle() }} className="chatbot"/></ThemeProvider>
      )
    }
}
