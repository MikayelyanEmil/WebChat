import '../assets/Chat.css'
import { useState } from 'react';

export default function Chat() {

    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

  
    const sendMessage = () => {
      if (inputMessage.trim() !== '') {
        socket.emit('sendMessage', inputMessage);
        setInputMessage('');
      }
    };


    return (
        <div className="chat-container">
            <div className="chat-header">
                <h1>Chat Application</h1>
            </div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        {msg}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}
