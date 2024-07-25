import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WebsocketService from '../services/websocket.service';

const Chat = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const auth = localStorage.getItem("user");
    const getCurrentUser = JSON.parse(auth).user;
    useEffect(() => {

        WebsocketService.connect();

        WebsocketService.onMessage((msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            WebsocketService.disconnect();
        }
    }, []);

    const sendMessage = () => {
        console.log(getCurrentUser._id);
        const msg = {
            sender: getCurrentUser._id,
            receiver: '66a1e10991f18209ce920616',
            content: message,
        };
        WebsocketService.sendMessage(msg);
        setMessage('');
    };

    return (
        <>
            <div className='chat-container'>
                <div className='sidebar'>
                    {contacts.map((contact) => (
                        <div key={contact._id} onClick={() => setSelectedContact(contact)}>
                            {contact.name}
                        </div>
                    ))}
                </div>
                <div className='chat-panel'>
                    {messages.map((msg, index) => (
                        <div key={index} className={msg.sender === getCurrentUser._id ? 'sent' : 'received'}>
                            {msg.content}
                        </div>
                    ))}
                    <input
                        type='text'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </>
    );
}

export default Chat;