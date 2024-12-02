import React, { useState } from "react";
import { TbSend } from "react-icons/tb";

const ChatBotModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const toggleModal = () => setIsOpen(!isOpen);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: inputMessage },
        {
          sender: "bot",
          text: "Thank you for reaching out! We'll respond soon.",
        }, 
      ]);
      setInputMessage("");
    }
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="fixed bottom-5 right-5 text-white rounded-full shadow-[#888] shadow-lg flex items-center justify-center"
      >
        <img
                src="https://static.vecteezy.com/system/resources/previews/016/716/468/original/whatsapp-icon-free-png.png"
                alt="Chatbot"
                className="w-20 h-20 rounded-full"
              />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white rounded-lg shadow-lg flex flex-col z-50">
          <div className="bg-green-500 text-white p-4 flex justify-between items-center rounded-t-lg">
            <div className="flex items-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/016/716/468/original/whatsapp-icon-free-png.png"
                alt="Chatbot"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h3 className="text-lg font-semibold">WhatsApp Bot</h3>
                <p className="text-sm text-gray-100">Online</p>
              </div>
            </div>
            <button
              onClick={toggleModal}
              className="text-white hover:text-gray-300"
            >
              ✖
            </button>
          </div>

          <div className="p-4 flex-1 overflow-y-auto max-h-64 bg-gray-100">
            {messages.length > 0 ? (
              <div className="space-y-3">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <p
                      className={`px-4 py-2 rounded-lg text-sm max-w-xs ${
                        msg.sender === "user"
                          ? "bg-green-500 text-white"
                          : "bg-white border border-gray-300"
                      }`}
                    >
                      {msg.text}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm text-center">
                Say "Hi" to start the conversation!
              </p>
            )}
          </div>

          <div className="flex p-4 border-t border-gray-200 bg-white">
            <input
              type="text"
              placeholder="Type a message"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600"
            >
              <TbSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotModal;
