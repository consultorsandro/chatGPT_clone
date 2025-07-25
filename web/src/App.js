import {useState} from 'react';
import './styles/App.css';
import './styles/reset.css';

import { makeRequest } from './api/api';
import {SideMenu} from './components/SideMenu/SideMenu/SideMenu';
import {ChartMessage} from './components/ChatMesssage/ChatMessage';




function App() {

  const [input, setInput] = useState(" ");
  const [chatlog, setChatlog] = useState([{
    user: "gpt",
    message: "Como posso ajudar você hoje?"
  }]);

async function handleSubmit(e) {
  e.preventDefault();

  let response = await makeRequest(input);
  response = response.data.split('\n').map((line) => <p>{line}</p>);
  setChatlog([...chatlog, { user: "me", message: input }, { user: "gpt", message: response }]);
  setInput("");
}

  return (
    <div className="App">
      <SideMenu></SideMenu>
      <section className='chatbox'>
        <div className='chatlog'>
          {chatlog.map((message, index) => (
            <ChartMessage key={index} message={message} />
          ))}
          </div>

        <div className='chat-input-holder'>
          <form onSubmit={handleSubmit}>
            <input
              rows='1'
              className='chat-input-textarea'
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
            />
            <button type="submit">Enviar</button>
          </form>
          </div>
      </section>
      <h1>App Works!</h1>
    </div>
  );
}

export default App;
