import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container">
        <h1 className="navbar-brand">Immigration Consultant App</h1>
        <button 
          className="navbar-toggler" 
          data-bs-toggle="collapse" 
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link"
                onClick={() => setCurrentPage('home')}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link"
                onClick={() => setCurrentPage('logout')}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John', text: 'Hello!', time: '10:00 AM' },
    { id: 2, sender: 'You', text: 'Hi John', time: '10:01 AM' }
  ]);
  
  const [newMessage, setNewMessage] = useState('');

  function handleSend(e) {
    e.preventDefault();  // Prevent form refresh
    
    if (!newMessage.trim()) return;  // Don't send empty messages
    
    setMessages([...messages, {
      id: messages.length + 1,
      sender: 'You',
      text: newMessage,
      time: new Date().toLocaleTimeString()
    }]);
    setNewMessage('');
  }

  return (
    <div className="container p-3">
      <h2>Chat with John Smith</h2>
      
      <div className="border p-3" style={{ height: '400px', overflowY: 'auto' }}>
        {messages.map(msg => (
          <div key={msg.id} className="mb-3 pb-2 border-bottom">
            <strong>{msg.sender}:</strong> {msg.text}
            <br />
            <small className="text-muted">{msg.time}</small>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend}>
        <div className="d-flex gap-2 mt-3">
          <input 
            type="text"
            className="form-control"
            placeholder="Type message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="btn btn-success" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === 'chat' && <Chat />}
      <Footer />
    </>
  );
}