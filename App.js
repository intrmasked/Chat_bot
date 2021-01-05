import React, { useEffect, useState } from 'react';
import { Button ,FormControl,InputLabel,Input} from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {

  const[input, setInput] = useState('');
  const[messages, setMessages] = useState([]);
  const[username, setUsername] = useState('');

  useEffect(()=>{
    setUsername( prompt('please enter your name'))
  },[])

  // fire app
  const firebaseConfig = {
    apiKey: "AIzaSyAyIIcUMLo1CxSEB0vw5VDiXcHIxNALJxo",
    authDomain: "first-chat-thing.firebaseapp.com",
    projectId: "first-chat-thing",
    storageBucket: "first-chat-thing.appspot.com",
    messagingSenderId: "138479380093",
    appId: "1:138479380093:web:581636b3be7f46858d7314",
    measurementId: "G-CDY67NHX2T"
  };
  
  // fire appp

  const sendMessage = (event) => {
    //logic behind sending the text
    event.preventDefault();
    setMessages([...messages, {username: username,tex: input}])
    setInput('');
  }
  return (
    <div className="App">
      <h1>messaging application by a dumbass </h1>
        <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel >Enter a message.....</InputLabel>
          <Input  value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} varient="contained" color="primary" type ='submit' onClick={sendMessage}>
            Send Message
          </Button>
        </FormControl>
      </form>
      
      {
        messages.map(message=>(
          <Message username={message.username} tex={message.tex}  />

          



        ))
      }




    </div>
  );
}

export default App;
