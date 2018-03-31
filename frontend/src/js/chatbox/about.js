import HelloWorld from '../../Assets/images/HelloWorld.png';
import React from 'react';

export const about =
[
{
    id: '0',
    component: (
        <div> <img src={HelloWorld} id="pandabologo" width="60" height="60" className="d-inline-block align-center" alt="" /> </div>
    ),
    trigger: 1,
},
{
id: 1,
message: 'Which is grammatically correct?',
trigger: '2',
},
{
id: '2',
options: [
    { value: 1, label: 'First-come, first-serve', trigger: '3' },
    { value: 2, label: 'First-come, first-served', trigger: '4' },

],
},
{
id: '3',
message: 'How embarrassing! Try again.',
trigger: '2',
},
{
id: '4',
message: 'Great!',
trigger: '5',
},
{
    id: '5',
    message: 'Which is grammatically correct?',
    trigger: '6',
},
{
    id: '6',
    options: [
        { value: 1, label: 'I could care less', trigger: '7' },
        { value: 2, label: 'I couldn\'t care less', trigger: '8' },

    ],
},
{
    id: '7',
    message: 'Uh oh! Try again.',
    trigger: '6',
},
{
    id: '8',
    message: 'Nice.',
    trigger: '9',
},
{
    id: '9',
    message: 'Which is grammatically correct?',
    trigger: '10',
},
{
    id: '10',
    options: [
        { value: 1, label: 'Regardless of what you think...', trigger: '12' },
        { value: 2, label: 'Irregardless of what you think...', trigger: '11' },

    ],
},
{
    id: '11',
    message: 'Hmmm...try again.',
    trigger: '10',
},
{
    id: '12',
    message: 'Good!',
    trigger: '13',
},
{
    id: '13',
    message: 'Which is grammatically correct?',
    trigger: '14',
},
{
    id: '14',
    options: [
        { value: 1, label: 'Karlee talked with Brandon and me.', trigger: '16' },
        { value: 2, label: 'Karlee talked with I.', trigger: '15' },

    ],
},
{
    id: '15',
    message: 'Not quite! Try again.',
    trigger: '15',
},
{
    id: '16',
    message: 'Nice one!',
    trigger: '17',
},
{
    id: '17',
    message: 'Which is grammatically correct?',
    trigger: '18',
},
{
    id: '18',
    options: [
        { value: 1, label: 'Me and Brandon met at Starbucks this morning.', trigger: '19' },
        { value: 2, label: 'Brandon and I met at Starbucks this morning.', trigger: '20' },

    ],
},
{
    id: '19',
    message: 'Nice try...Try again.',
    trigger: '18',
},
{
    id: '20',
    message: 'Sweet!',
    trigger: '0',
},
]
