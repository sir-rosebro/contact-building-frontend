'use client';

import { useState, useRef, useEffect } from 'react';

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can Handman assist you today?', sender: 'agent' },
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const chatContainerRef = useRef(null);
  const fileInputRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle message submission
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim() && !selectedImage) return;

    const newMessages = [];

    if (inputText.trim()) {
      newMessages.push({
        id: messages.length + 1,
        text: inputText,
        sender: 'user',
      });
    }

    if (selectedImage) {
      const imageUrl = URL.createObjectURL(selectedImage);
      newMessages.push({
        id: messages.length + newMessages.length + 1,
        image: imageUrl,
        sender: 'user',
      });
    }

    setMessages([...messages, ...newMessages]);
    setInputText('');
    setSelectedImage(null);

    // Simulate agent response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: 'Got it! What’s next?',
          sender: 'agent',
        },
      ]);
    }, 1000);
  };

  // Trigger file input click
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // Handle image selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div className="container h-100 my-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Header */}
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h5 className="mb-0">Handman Agent</h5>
            </div>

            {/* Chat Area */}
            <div
              className="card-body overflow-auto"
              style={{ height: '60vh', backgroundColor: '#f8f9fa' }}
              ref={chatContainerRef}
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`d-flex mb-3 ${
                    message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'
                  }`}
                >
                  <div
                    className={`d-flex align-items-center ${
                      message.sender === 'user' ? 'flex-row-reverse' : ''
                    }`}
                    style={{ maxWidth: '80%' }}
                  >
                    <i
                      className={`bi ${
                        message.sender === 'user' ? 'bi-person' : 'bi-robot'
                      } me-2`}
                      style={{ fontSize: '1.5rem', color: message.sender === 'user' ? '#007bff' : '#6c757d' }}
                    ></i>
                    <div
                      className={`p-2 rounded ${
                        message.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-white border shadow-sm'
                      }`}
                    >
                      {message.text && <p className="m-0">{message.text}</p>}
                      {message.image && (
                        <img
                          src={message.image}
                          alt="Uploaded"
                          className="rounded"
                          style={{ maxWidth: '200px', maxHeight: '200px' }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="card-footer">
              <form onSubmit={handleSendMessage}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type a message..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleImageClick}
                  >
                    <i className="bi bi-image"></i>
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-send"></i>
                  </button>
                </div>
                {selectedImage && (
                  <div className="mt-2 text-muted">
                    <small>Selected: {selectedImage.name}</small>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}