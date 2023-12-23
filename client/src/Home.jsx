import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'

import {io} from 'socket.io-client';



function Home() {
  const [messages, setMessages] = useState([]);

  const socket = io('http://localhost:3000');
  socket.on('connect', () => {
    console.log(22222222223333);
  })
  socket.on('get-message', (message) => {
    setMessages([...messages, message]);
  })


  const sendMessage = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    socket.emit('send-message', message);
  }


  return (
    <>
      <form action="" onSubmit={(e) => sendMessage(e)}>
        <input type="text" name='message' id='message' />
        <button className="sendMessageBtn" type='submit'>Send</button>
      </form>

      <div className='test'>
        {messages}
      </div>
    </>
  )
}

export default Home;
