import React, { Component } from 'react';

import dogpic from './doggo.jpeg'
import './App.css';
import ChatBot from 'react-simple-chatbot';
import styled from 'styled-components';

const theme = styled.div`
  background: '#f8faf4',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '55px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const steps = [
  {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you! How are you feeling now?',
      trigger: '4',
    },
    {
        id: '4',
        options: [
          { value: 1, label: 'Amazing! =)', trigger: '5' },
          { value: 2, label: 'Sad =(', trigger: '6' },
          { value: 3, label: 'I dont know', trigger: '7' },
        ],
      },
      {
        id: '5',
        component: musicMessage(),
        end: true,
      },
      {
        id: '6',
         message: 'You need to listen this music: YYY',
        end: true,
      },{
        id: '7',
         message: 'This is the music for you: https://www.youtube.com/watch?v=uFAWIKVThjA',
        end: true,
      }
];

function musicMessage () {
  return (<span><a href="https://www.google.com">You may like this!</a></span>);
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      horseMusic: "https://youtu.be/ZQOYOuSWywA",
    }
  }


  render() {
    return (
    <div>
    <styled theme={theme}>
    <div>
    <Wrapper>
      <div >
        <ChatBot steps={steps} />
      </div>
      </Wrapper>
      </div>
    </styled>
    </div>
    );
  }
}

export default App;