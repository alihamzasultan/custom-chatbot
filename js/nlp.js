const intents = {
    "greeting": ["hello", "hi", "hey"],
    "farewell": ["bye", "goodbye", "see you"],
    "thanks": ["thanks", "thank you"],
    "unknown": "I'm not sure what you're asking. Could you rephrase that?"
};

function recognizeIntent(userInput) {
    const lowerInput = userInput.toLowerCase();
    for (const intent in intents) {
        if (intents[intent].some(keyword => lowerInput.includes(keyword))) {
            return intent;
        }
    }
    return "unknown";
}

function generateResponse(intent) {
    switch (intent) {
        case "greeting":
            return "Hello! How can I assist you today?";
        case "farewell":
            return "Goodbye! Feel free to come back if you need more help.";
        case "thanks":
            return "You're welcome!";
        default:
            return intents.unknown;
    }
}
