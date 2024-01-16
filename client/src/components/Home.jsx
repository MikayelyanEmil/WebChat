import { useEffect, useState } from 'react'
import '../assets/Home.css'


function Home({ messages, socket }) {
  function apiCall() {
    fetch('http://localhost:3000/test');
  }

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

      <div>
        {socket.id }
      </div>

      <button onClick={() => apiCall()}>Test</button>

    </>
  )
}

export default Home;
