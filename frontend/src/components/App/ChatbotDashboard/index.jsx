import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import HelloWorld from '../../../Assets/images/HelloWorld.png';




export default class ChatbotDashboard extends Component {
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
        message: 'Worrying is like rocking on a rocking chair; you rock and rock but go nowhere... Hi there!',
        trigger: '3',
      },
      
      {
        id: '3',
        message: 'How can I help?',
        trigger: '4',
      },
        {
          id: '4',
            options: [
              { value: 1, label: 'How do I prepare to study one of the most valuable majors?', trigger: '5' },
              { value: 2, label: 'The major I want to study is not on the most valuable majors list. Does that mean what I want to study is not valuable?', trigger: '6' },
              { value: 3, label: 'Am I guaranteed a job if I study one of the subjects on the most valuable majors?', trigger: '6' },
              { value: 4, label: 'What if I try one of these subjects and then realize years later that I hate it?', trigger: '8' },
              { value: 5, label: 'What if I study one of these majors and in 2020 the major is no longer valuable?', trigger: '9' },
              { value: 6, label: 'I have another question...', trigger: '14' },
            ],
          },
          {
            id: '5',
            message: 'We recommend that you research about your intended subject of study. For example, search online, talk to people who have majored in that subject.  We can also help! Would you like to talk to one of our advisors for a FREE initial consultation?',
            trigger: '10',
          },
          {
            id: '6',
            message: 'You should study a subject that you are passionate about. Nothing in life is guaranteed, so make sure that you do what you love. However, it is also a good idea to try new things and step outside of your comfort zone! Would you like to talk to one of our advisors for a FREE initial consultation?',
            trigger: '10',
          },
          
          {
            id: '8',
            message: 'Every experience is a learning opportunity. Our advisors can help you make more informed decisions about your major so that you can avoid wasted time. Would you like to talk to one of our advisors for a FREE initial consultation?',
            trigger: '10',
          },
          {
            id: '9',
            message: 'If we could tell the future with absolute certainty, it would take the fun out of living! There is no return without risk. You have to just hope for the best, prepare for the worst, and always try 100%! Would you like to talk to one of our advisors for a FREE initial consultation?' ,
            trigger: '10',
          },
          {
            id: '10',
              options: [
                { value: 1, label: 'Sure!' , trigger: '11' },
                { value: 2, label: 'Not now thanks!', trigger: '4' },
          ],
            },
            {
                id: '11',
              message: 'Great! Book your FREE initial consultation, and an advisor will be in touch with you within 2 business days.',
                trigger: '12',
              },
              {
                id: '12',
                message: 'Check out our store for recommended products and services that can help you succeed!',
                trigger: '13',
              },
              {
                id: '13',
                message: 'Can I help you with anything else?',
                trigger: '4',
              },
              {
                id: '14',
                user: true,
                trigger: '15',
              },
              {
                id: '15',
                message: 'I understand that you would like the answer to: {previousValue}... I do not have the answer right now. Would you like to talk to one of our advisors for a FREE initial consultation?',
                trigger: '10',
              },
      ]
      return (
        <ThemeProvider theme={theme}><ChatBot steps={steps} opened={this.state.status} floating={true} hideBotAvatar={true} hideHeader={false} toggleFloating={() => { this.mytoggle() }} /></ThemeProvider>
      )
    }
}