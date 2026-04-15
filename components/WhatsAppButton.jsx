"use client";
export default function WhatsAppButton() {
    return (
      <>
        <a
          href="https://wa.me/256743946261?text=Hi!%20I'm%20interested%20in%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="wa-button"
        >
          <svg viewBox="0 0 32 32" className="wa-icon">
            <path
              fill="white"
              d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.4 32l8.3-2.2c2.3 1.3 4.9 2 7.6 2h.1c8.6 0 15.6-7 15.6-15.6C32 7.4 25 .4 16 .4zm0 28.6c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5C3.7 20.9 3 18.5 3 16 3 9 9 3 16 3s13 6 13 13-6 13-13 13zm7.3-9.7c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.5-.2-.7.2s-.8 1.2-1 1.4c-.2.2-.3.3-.7.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.6-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5z"
            />
          </svg>
         
        </a>
  
        <style jsx>{`
          .wa-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
            background: #25d366;
            color: white;
            padding: 10px 10px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z-index: 9999;
            animation: pulse 2s infinite;
          }
  
          .wa-icon {
            width: 24px;
            height: 24px;
          }
  
          .wa-text {
            font-size: 14px;
          }
  
          .wa-button:hover {
            background: #1ebe5d;
          }
  
          .wa-button::after {
            content: "We are available! Click to chat";
            position: absolute;
            bottom: 60px;
            right: 0;
            background: #25d366;
            color: white;
            padding: 8px;
            border-radius: 6px;
            font-size: 12px;
            opacity: 0;
            transform: translateY(10px);
            transition: 0.3s;
            width: 180px;
            text-align: center;
          }
  
          .wa-button:hover::after {
            opacity: 1;
            transform: translateY(0);
          }
  
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1); }
          }
        `}</style>
      </>
    );
  }