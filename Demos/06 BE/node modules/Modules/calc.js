// Main program (app.js)
const process = require('process');

// Define available modules
const modules = {
    add: require('./add'),
    subtract: require('./subtract'),
    multiply: require('./multiply'),
    divide: require('./divide'),
};

// Check command-line arguments
if (process.argv.length !== 5) {
    console.error('Usage: node app.js <operation> <operand1> <operand2>');
    process.exit(1);
}

const operation = process.argv[2];
const operand1 = parseFloat(process.argv[3]);
const operand2 = parseFloat(process.argv[4]);

// Load and execute the selected module
const selectedModule = modules[operation];
if (selectedModule) {
    const result = selectedModule(operand1, operand2);
    console.log(`Result: ${result}`);
} else {
    console.error(`Operation '${operation}' not found.`);
}
