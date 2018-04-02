import HelloWorld from '../../Assets/images/HelloWorld.png';
import React from 'react';

export const contactus=[

  {
    id: '0',
    component: (
      <div> <img src={HelloWorld} id="pandabologo" width="60" height="60" className="d-inline-block align-center" alt="" /> </div>
    ),
    trigger: '1',
  },

  {
      id: '1',
      message: 'Success is a phone call away! How can I help?',
      trigger: '2',
    },
    {
      id: '2',
        options: [
          { value: 1, label: 'When will I hear from you?', trigger: '3' },
          { value: 2, label: 'What are the qualifications of your advisors?', trigger: '4' },
          { value: 3, label: 'What if I do not like the advisor who calls me?', trigger: '5' },
          { value: 4, label: 'What if I do not hear from you in 2 business days?', trigger: '7' },
          { value: 5, label: 'I have another question...', trigger: '12' }
        ],
      },
      {
        id: '3',
        message: 'An advisor will reach out to you in 2 business days after you fill out your contact information and comment form in "Contact Us".',
        trigger: '2',
      },
      {
        id: '4',
        message: 'Our advisors are experienced consultants and counsellors who have attended some of the top schools in Canada and/or USA. Would you like to talk to one of our advisors for a FREE initial consultation?',
        trigger: '9',
      },
      {
        id: '5',
        message: 'If you are dissatisfied with your advisor, please contact us with details and we will be happy to follow up and schedule you with another advisor for another FREE inital consultation.',
        trigger: '2',
      },

      {
        id: '7',
        message: 'Please enter your information and comments again because your information may not have been recorded.  An advisor will be in touch with you within 2 business days for a FREE initial consultation. Thank you for your patience!',
        trigger: '2',
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
            message: 'Great! Go to the "Contact Us" link and create a profile. An advisor will be in touch with you within 2 business days for a FREE initial consultation!',
            trigger: '11',
          },
          {
            id: '11',
            message: 'Check out our store for recommended products and services that can help you succeed!',
            trigger: '1',
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
