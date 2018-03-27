import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import HelloWorld from '../../../Assets/images/HelloWorld.png';

export default class ChatbotStore extends Component {
  constructor (){
    super()
    this.state={
      status:false
    }
  }

mytoggle=()=>{
this.setState({status:!this.state.status})
}


  render() {

    {
      const theme = {
        background: '#f5f8fb',
        fontFamily: 'lato',
        headerBgColor: '#00E5FF',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#00E5FF',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      };


    const steps=[
        
      {
        id: '0',
        component: (
          <div> <img src={HelloWorld} id="pandabologo" width="60" height="60" class="d-inline-block align-center" alt="" /> </div>
        ),
        trigger: '1',
      },
        {
          id: '1',
          message: 'Hello! How can I help?',
          trigger: '2',
        },
        {
          id: '2',
            options: [
              { value: 1, label: 'How do I receive the services?', trigger: '3' },
              { value: 2, label: 'How do I know which services or products to buy?', trigger: '4' },
              { value: 3, label: 'Which is better: TOEFL or IELTS?', trigger: '6' },
              { value: 4, label: 'Do I have to take the SAT?', trigger: '5' },
              { value: 5, label: 'How long do I have to study for these standardized tests?', trigger: '4' },
              { value: 6, label: 'I have another question...', trigger: '12' },
            ],
          },
          {
            id: '3',
            message: 'An advisor will reach out to you within 2 business days to schedule your services. If you have any further questions, please fill out a comment form in "Contact Us" , and we will respond within 2 business days.',
            trigger: '1',
          },
          {
            id: '4',
            message: 'It really depends on your needs and preferences. Would you like to talk to one of our advisors for a FREE initial consultation?',
            trigger: '9',
          },
          {
            id: '5',
            message: 'It really depends on your dream university. Most US universities require SAT. Would you like to talk to one of our advisors for a FREE initial consultation?',
            trigger: '9',
          },
          {
            id: '6',
            message: 'Both TOEFL and IELTS test your English reading, listening, writing and speaking proficiency. TOEFL has primarily multiple-choice questions, whereas IELTS has a lot of fill-in-the-blank questions. Would you like to talk to one of our advisors for a FREE initial consultation?',
            trigger: '9',
          },
          {
            id: '9',
              options: [
                { value: 1, label: 'Sure!' , trigger: '10' },
                { value: 2, label: 'Not now thanks!', trigger: '1' },
          ],
            },
            {
                id: '10',
              message: 'Great! Book your FREE initial consultation, and an advisor will be in touch with you within 2 business days.',
                trigger: '11',
              },
              {
                id: '11',
                message: 'Check out our store for recommended products and services that can help you succeed!',
                trigger: '12',
              },
              {
                id: '12',
                message: 'Can I help you with anything else?',
                trigger: '13',
              },
              {
                id: '13',
                user: true,
                trigger: '14',
              },
              {
                id: '14',
                message: 'I understand that you would like the answer to: {previousValue}... I do not have the answer right now. Would you like to talk to one of our advisors for a FREE initial consultation?',
                trigger: '1',
              },
      ]
      return (
        <ThemeProvider theme={theme}><ChatBot steps={steps} opened={this.state.status} floating={true} hideBotAvatar={true} hideHeader={false} toggleFloating={() => { this.mytoggle() }} /></ThemeProvider>
      )
     }
     }
    }