const readline = require('readline');

// Predefined questions and answers
const chatbotResponses = {
    'How are you?': 'I am a chatbot. I do not have feelings, but thanks for asking!',
    'What is your name?': 'I am just a simple chatbot.',
    'Tell me a joke.': 'Why don’t scientists trust atoms? Because they make up everything!',
    'exit': 'Goodbye! Have a great day.',
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('Chatbot: Hello! I am a simple chatbot. Ask me anything, or type "exit" to quit.');

rl.on('line', (userInput) => {
    if (chatbotResponses.hasOwnProperty(userInput)) {
        console.log('Chatbot:', chatbotResponses[userInput]);
        if (userInput.toLowerCase() === 'exit') {
            rl.close();
        }
    } else {
        console.log('Chatbot: You said:', userInput);
    }
});

rl.on('close', () => {
    console.log('Chatbot: Goodbye!');
    process.exit(0);
});
