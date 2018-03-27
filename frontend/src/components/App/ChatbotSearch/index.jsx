import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import HelloWorld from '../../../Assets/images/HelloWorld.png'
import { ThemeProvider } from 'styled-components';



export default class ChatbotSearch extends Component {
   

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
          message: 'Hello there!', 
          trigger: '4',
        },
        
        {
          id: '4',
          message: 'How can I help?',
          trigger: '5',
        },
        {
          id: '5',
            options: [
              { value: 1, label: 'What is the difference between Undergraduate and Graduate degrees?', trigger: '6' },
              { value: 2, label: 'What is a good subject to study in university?', trigger: '7' },
              { value: 3, label: 'What are the pros and cons of studying in Canada vs USA?', trigger: '8' },
              { value: 4, label: 'I have another question...', trigger: '12' },
            ],
          },
          {
            id: '6',
            message: 'An undergraduate degree is usually the first degree at university that you get after highschool, such as a bachelors degree. Graduate degrees are degrees for after you finish your undergraduate degree, such as law school, medical school, a masters or phD.',
            trigger: '5',
          },
          {
            id: '7',
            message: 'It really depends on your strengths and preferences. What are your favorite subjects in school? What subjects are you interested in learning? On our homepage, we have a list of the top most valuable university majors. Would you like to talk to one of our advisors for a FREE initial consultation?',
            trigger: '9',
          },
          {
            id: '8',
            message: 'It really depends on your priorities. For instance, where do you want to live and work after you graduate? US universities also generally have more application requirements than Canadian universities. Would you like to talk to one of our advisors for a FREE initial consultation?',
            trigger: '9',
          },
          {
            id: '9',
              options: [
                { value: 1, label: 'Sure!' , trigger: '10' },
                { value: 2, label: 'Not now thanks!', trigger: '4' },
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
                message: 'I understand that you would like the answer to: {previousValue} I do not have the answer right now. Would you like to talk to one of our advisors for a FREE initial consultation?',
                trigger: '4',
              },
      ]
      return (
        <ThemeProvider theme={theme}><ChatBot steps={steps} opened={this.state.status} floating={true} hideBotAvatar={true} hideHeader={false} toggleFloating={() => { this.mytoggle() }} /></ThemeProvider>
      )
    }
}
}
// ReactDOM.render(
//   ,
//   document.getElementById('root')
// );







