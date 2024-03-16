import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NotAuthorised from '../NotAuthorised';

function ChatComponent({ currentUser, getMessages, setMessages }) {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const messages = getMessages();
    setChatHistory(messages);
  }, [getMessages]);

  const sendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = `${currentUser}: ${message}`;
      setChatHistory(prevChat => [...prevChat, newMessage]);
      setMessage('');
      setMessages(prevMessages => [...prevMessages, newMessage]);
    }
  };
  if(currentUser === ''){
    return <NotAuthorised admin={''}/>
  }

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        <textarea
          rows="10"
          cols="50"
          value={chatHistory.join('\n')}
          readOnly
          style={{ width: '100%', resize: 'none' }}
        ></textarea>
      </div>
    </div>
  );
}

ChatComponent.propTypes = {
  currentUser: PropTypes.string.isRequired,
  setMessages: PropTypes.func.isRequired,
  getMessages: PropTypes.func.isRequired,
};

export default ChatComponent;
