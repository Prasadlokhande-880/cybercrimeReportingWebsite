import React, { useState } from 'react';
import "./Chart.css"
const ChatbotComponent: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    // Add user message to chat
    setChatMessages([...chatMessages, `User: ${userInput}`]);

    // Define the endpoint URL
    const endpoint = 'https://ascb.onrender.com/make-model-prediction';

    // Define the content to be sent in the POST request
    const postData = {
      contentSent: userInput,
    };

    // Make the POST request
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed
      },
      body: JSON.stringify(postData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        const chatbotResponse = data.predictions[0].candidates[0].content;
        setChatMessages([...chatMessages, `Chatbot: ${chatbotResponse}`]);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
        setChatMessages([...chatMessages, 'Error occurred while making the request.']);
      });

    // Clear the input field
    setUserInput('');
  };

  return (
    <div>
    <div className="chat-container">
      {chatMessages.map((message, index) => (
        <div key={index} className="chat-message">
          {message}
        </div>
      ))} 
    </div>

    <div className="input-container">
      <input type="text" className="chat-input" value={userInput} onChange={handleInputChange} />
      <button className="send-button" onClick={handleSendMessage}>Send</button>
    </div>
  </div>
  );
};

export default ChatbotComponent;
