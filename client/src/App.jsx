import { useEffect, useState } from 'react'
// import { socket } from './config/socket';
import Home from './components/Home';
import Auth from './components/Auth';
import Chat from './components/Chat';
import { Outlet } from 'react-router-dom';




function App() {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   function onGetMessage(message) {
  //     console.log(messages);
  //     console.log(message);
  //     setMessages([...messages, message])
  //   }


  //   socket.on('connect', () => {
  //     console.log("connected");
  //   });
  //   socket.on('get-message', (message) => onGetMessage(message));


    // return () => {
    //   socket.off('connect', () => {
    //     console.log("disconnected");
    //   });
    //   socket.off('get-message',)
    // }
  // })

  async function test() {
    const response = await fetch('api/test');
    const data = await response.json();

    console.log(data);
  }

  return (
    // <Home messages={messages} socket={socket} />
    <>
      <Outlet />
      {/* <Auth newUser={false} />
      <button onClick={() => test()}>test</button>
      <a href="/test">Link</a> */}
    </>
  )
}

export default App;
