import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const Main = () => {
    const [showMessageInput, setShowMessageInput] = useState(false);
    const [messageText, setMessageText] = useState('');
    const [name, setName] = useState("");
    const [ID, setID] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const userName = localStorage.getItem("name");
        const userID = localStorage.getItem("userID");
        setName(userName);
        setID(userID);

        fetch("http://localhost:8080/api/messages")
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error("Failed to fetch messages:", error);
      });
    }, []); 

    const handleAddMessage = () => {
        const publication_time = new Date().toLocaleTimeString();
        
        const fullDate = new Date();
        const day = fullDate.getDate();
        const month = fullDate.toLocaleString('en-US', { month: 'long' });
        const year = fullDate.getFullYear();
        const publication_date = `${day}.${month}.${year}`;
        
        if(messageText==='') {
            console.log('Textarea nie zawiera tekstu')
        }
        else {
            fetch('http://localhost:8080/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ID,
                    publication_time,
                    publication_date,
                    messageText,
                }),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // error
            })
            .catch((error) => {
                console.error('Failed to send message:', error);
                // error
            });
        }
        
        setMessageText('');
        setShowMessageInput(false);
    };

    const handleCancel = () => {
        setMessageText('');
        setShowMessageInput(false);
      };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("userID");
        window.location.reload();
    };

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Message Board</h1>
                {name && <h1>Welcome, {name}</h1>}
                <button className={styles.white_btn} onClick={handleLogout}>
                Logout
                </button>
            </nav>
            <div className={styles.addButtonContainer}>
                {!showMessageInput ? (
                    <button
                        className={styles.addButton}
                        onClick={() => setShowMessageInput(true)}
                    > + add a message </button>
                ) : (
                    <div>
                        <input
                            className={styles.addMessageInput}
                            type="textarea"
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                        />
                        <div className={styles.buttonsContainer}>
                            <button onClick={handleCancel}>Cancel</button>
                            <button onClick={handleAddMessage}>Publicate</button>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.messageList}>
        {messages.map((message) => (
          <div key={message._id} className={styles.messageItem}>
            <p>{message.content}</p>
            <p>{message.publication_date}</p>
            <p>{message.publication_time}</p>
          </div>
        ))}
      </div>
        </div>
    );
};

export default Main;
