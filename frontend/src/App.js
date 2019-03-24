import React, { Component } from 'react';

import './App.css';
import ChatBot from 'react-simple-chatbot';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const steps = [
  {
      id: '1',
      message: 'My name is Jazz! What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi, {previousValue}! Let me prove how amazing you are.',
      trigger: '11',
    },
    {
      id: '11',
      message: 'When was the first day of your period?',
      trigger: 'age',
    },
    {
      id: 'age',
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return 'value should be a number';
        }
        return true;
      },
      trigger: '13',
    },
    {
      id: '13',
      message: 'Now.. I will recommend the right music for you.',
      trigger: '5',
    },
    {
        id: '4',
        options: [
          { value: 1, label: '=)', trigger: '5' },
          { value: 2, label: '=(', trigger: '6' },
          { value: 3, label: '(ツ)_/¯', trigger: '7'},
          { value: 4, label: 'bla', trigger: '8' },

        ],
      },
      {
        id: '5',
        component: musicMessageFirst(),
        trigger: '9',
      },
      {
        id: '6',
        component: musicMessageSecond(),
        trigger: '9',
      },{
        id: '7',
         component: musicMessageThird(),
        trigger: '9',
      },
      {
        id: '8',
         component: musicMessageFour(),
        trigger: '9',
      }, 
 {
      id: '9',
      message: 'Do you want to hear more?',
      trigger: '10',
    },
    {
        id: '10',
        options: [
          { value: 1, label: 'SURE!', trigger: '6' },
          { value: 2, label: 'Nops',  trigger: '14'},
        ],
      },
  {
      id: '14',
      message: 'Congrats! Your heartbeat is normal now. Lets be happy Together!!!',
      end: true ,
    },
];

function musicMessageFirst() {
  return (<span><a href="https://youtu.be/VBmMU_iwe6U" target="_blank">Who runs the world?</a></span>);
}
function musicMessageSecond() {
  return (<span><a href="https://youtu.be/2EwViQxSJJQ" target="_blank">Guess who is irreplaceble?</a></span>);
}
function musicMessageThird() {
  return (<span><a href="https://youtu.be/qTeXA4Og5NI" target="_blank">You may like this!</a></span>);
}
function musicMessageFour() {
  return (<span><a href="https://youtu.be/mFlrc16xjik" target="_blank">You may like this!</a></span>);
}

class App extends Component {
  render() {
    return (
      <div >
      <Wrapper>
      <div>
        <ChatBot steps={steps} />
      </div>
      </Wrapper>
    </div>
    );
}

}
export default App;
