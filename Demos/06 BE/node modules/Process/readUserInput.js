

console.log('Type your messages, or type "exit" to quit.');


process.stdout.write('Your Message:')
process.stdin.on('data', (data) => {

    const userInput = data.toString().trim();

    if (userInput.toLowerCase() === 'exit') {
        console.log('Goodbye!');
        process.exit(0);
    }


    console.log(`Num of chars: ${userInput.length}`);
    
    process.stdout.write(`Your Message:`)
});