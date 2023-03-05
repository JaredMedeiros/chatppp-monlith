import './normalize.css';
import './App.css';
import { useState } from 'react';

function App() {

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('submit')
  }

  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = usetState([];)

  return (
    <div className="App">
      <aside className='sidemenu'>
        <div className='sidemenu-button'>
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className='chatbox'>
        <div className='chat-log'>
          <div className='chat-message'>
            <div className='chat-message-center'>
              <div className='chat-message-avatar'>
                
              </div>
              <div className='chat-message-content'>
                Hello World
              </div>
            </div>
          </div>
          <div className='chat-message ppp-message'>
            <div className='chat-message-center'>
              <div className='chat-message-avatar'>
                
              </div>
              <div className='chat-message-content'>
                Am robot
              </div>
            </div>
          </div>
        </div>

        <div className='chat-input-holder'>
          <form onSubmit={handleSubmit}>
            <input
            className="chat-input-textarea"
            placeholder="Type your message here"
            rows="1"
            >

            </input>
          </form>
        </div>
      </section>
      
    </div>
  );
}

export default App;
