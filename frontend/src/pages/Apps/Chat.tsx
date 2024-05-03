import React, { useState } from "react";
import "./Chart.css";
const ChatbotComponent: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    // Add user message to chat
    setChatMessages([...chatMessages, `User: ${userInput}`]);

    // Define the endpoint URL
    const endpoint = "https://ascb.onrender.com/make-model-prediction";

    // Define the content to be sent in the POST request
    const postData = {
      contentSent: userInput,
    };

    // Make the POST request
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if needed
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        const chatbotResponse = data.predictions[0].candidates[0].content;
        setChatMessages([...chatMessages, `Chatbot: ${chatbotResponse}`]);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        setChatMessages([
          ...chatMessages,
          "Error occurred while making the request.",
        ]);
      });

    // Clear the input field
    setUserInput("");
  };

  return (
    <div>
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/WidGfnug8fK5nBucV8V8-"
        title="Chatbot"
        width="100%"
        height={"600px"}
      ></iframe>
    </div>
  );
};

export default ChatbotComponent;
