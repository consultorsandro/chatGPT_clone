import React from "react";
import "./ChatMessage.css"; // Assuming you have a CSS file for styling
import Avatar from "../../assets/avatar"; // Importing the Avatar component

// user-defined component to display a chat message
// message - prompt object with author and content properties
/* {
    user: 'gpt'
    message:'crie um nome de artigo'
}
 */export const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user=== 'gpt'} && "chatgpt"}`}>
      <div className={`avatar ${message.user === 'gpt'&& "chatgpt"}`}>
      {message.user === 'gpt' && <Avatar />}  
      </div>
      <div className="message">
        {message.message}
      </div>
    </div>
  );
};

export default ChatMessage;
