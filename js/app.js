const chatBox = document.getElementById('chat-box');

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();

    if (userInput === "") {
        return; // Don't send empty messages
    }

    displayMessage(userInput, "user-message");

    // Simulate processing and response
    setTimeout(() => {
        const intent = recognizeIntent(userInput);
        const botResponse = generateResponse(intent);
        simulateTypingEffect(botResponse);
    }, 500); // Delay bot response for more realism

    document.getElementById('user-input').value = ''; // Clear input
}

function displayMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message ' + className;
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

function simulateTypingEffect(botResponse) {
    displayMessage("Bot is typing...", "bot-message");
    setTimeout(() => {
        chatBox.removeChild(chatBox.lastChild); // Remove 'Bot is typing...' message
        displayMessage(botResponse, "bot-message");
    }, 1000);
}
