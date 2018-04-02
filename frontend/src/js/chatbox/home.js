import HelloWorld from '../../Assets/images/HelloWorld.png';
import React from 'react';

export const home=[


  {
    id: '0',
    component: (
      <div> <img src={HelloWorld} id="pandabologo" width="60" height="60" className="d-inline-block align-center" alt="" /> </div>
    ),
    trigger: '1',
  },

  {
      id: '1',
      message: 'Hello there! What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}! At Pandahug we provide individualized care and support to help you succeed!',
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

          { value: 1, label: 'What is my dream school/university?', trigger: '6' },
          { value: 2, label: 'What are my chances of getting accepted into my dream school/university?', trigger: '7' },
          { value: 3, label: 'I am feeling both excited and overwhelmed! How can I manage my stress?', trigger: '8' },
          { value: 4, label: 'I have another question...', trigger: '12' },
        ],
      },
      {
        id: '6',
        message: 'Check out our "Search" page to learn more about great schools and majors to fit your goals and needs. Each school/university has different requirements. For example, grades, interview, essays, references and even home address! We can help you prepare. Would you like to talk to one of our advisors for a FREE initial consultation?',
        trigger: '9',
      },
      {
        id: '7',
        message: 'It really depends on your strengths and experience. Not only can we give you a good idea of your probability of acceptance, but also we can help you strengthen your application. Would you like to talk to one of our advisors for a FREE initial consultation?',
        trigger: '9',
      },
      {
        id: '8',
        message: 'We totally understand! Making decisions and dealing with uncertainty can be scary. We can help you manage your stress better so that you can maximize your potential and achieve excellence. Would you like to talk to one of our advisors for a FREE initial consultation?',
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
            trigger: '4',
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
            trigger: '9',
          },
  ]
