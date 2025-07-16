
"use client";

import { useEffect, useState } from "react";

const fakeMessages = [
  { name: "Sarah", action: "booked a bathroom renovation", time: "2 minutes ago", location: "Bondi", icon: "bi-badge-wc", status: "Booked" },
  { name: "Tom", action: "got kitchen renovation", time: "6 hours ago", location: "Manly", icon: "bi-hammer", status: "In Progress" },
  { name: "Emma", action: "hired for waterproofing", time: "1 day ago", location: "Parramatta", icon: "bi-droplet", status: "Completed" },
  { name: "Michael", action: "booked a painting service", time: "4 minutes ago", location: "Chatswood", icon: "bi-brush", status: "Booked" },
  { name: "Olivia", action: "requested general fixes", time: "2 hours ago", location: "Newtown", icon: "bi-tools", status: "In Progress" }
];

export default function SocialProofPopup() {
  const [visible, setVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    setVisible(true);
    const hide = setTimeout(() => setVisible(false), 5000);

    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % fakeMessages.length);
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }, 15000);

    return () => {
      clearTimeout(hide);
      clearInterval(interval);
    };
  }, []);

  const message = fakeMessages[messageIndex];

  const statusColors = {
    "Booked": "#17a2b8",
    "In Progress": "#ffc107",
    "Completed": "#28a745"
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 9999, pointerEvents: 'none' }}>
      <div
        style={{
          background: '#5a5a5a',
          color: '#fff',
          padding: '12px 16px',
          borderRadius: '16px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          maxWidth: '320px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          position: 'relative',
          pointerEvents: 'auto'
        }}
      >
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <i className={`bi ${message.icon}`} style={{ fontSize: '20px' }}></i>
          <div>
            <p style={{ margin: 0, fontSize: '12px', fontWeight: 400, lineHeight: '1.4' }}>{message.name} {message.action} in {message.location}</p>
            <p style={{ margin: 0, fontSize: '11px', opacity: 0.85 }}>
              {message.time} <span style={{
                backgroundColor: statusColors[message.status],
                color: '#fff',
                padding: '2px 8px',
                borderRadius: '8px',
                fontSize: '10px',
                marginLeft: '6px',
                fontWeight: '500'
              }}>{message.status}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
