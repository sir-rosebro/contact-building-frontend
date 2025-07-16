"use client"

import React, { useState } from "react";
import Image from "next/image";
import "./ChatWidget.css";
import ChatAvatar from "@/public/assets/images/chat-avatar.png"

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: userInput }]);
    setUserInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Thanks! We're working on it." },
      ]);
    }, 600);
  };

  return (
    <>
     {!isChatOpen && (
  <div className="handyman-widget" onClick={toggleChat}>
    <div className="avatar-container">
      <Image src={ChatAvatar} alt="Fixie Assistant" className="avatar" />
      <span className="status-glow" />
    </div>
    <div className="tagline">Need help fixing something?</div>
  </div>
)}

      {isChatOpen && (
        <div className="chat-window fade-in">
          <div className="chat-header">
            🛠️ HandyBot
            <span className="close-btn" onClick={toggleChat}>✖</span>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.role}`}>
                <div className="avatar">{msg.role === "user" ? "👤" : "🤖"}</div>
                <div className="bubble">{msg.content}</div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="chat-input">
            <input
              type="text"
              placeholder="Ask anything..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button type="submit">➤</button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
