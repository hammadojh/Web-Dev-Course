const crypto = require('crypto');

function sha256(data) {
    return crypto.createHash('sha256').update(data).digest('base64');
}

function bruteForcePassword(hash, chars, maxLength) {
    function attempt(index, prefix) {
        for (let i = 0; i < chars.length; i++) {
            const next = prefix + chars[i];
            if (index > 0) {
                attempt(index - 1, next);
            }
            if (sha256(next) === hash) {
                console.log(`Password found: ${next}`);
                return next;
            }
        }
    }

    for (let length = 1; length <= maxLength; length++) {
        const result = attempt(length - 1, '');
        if (result) {
            break;
        }
    }
}

const targetHash = sha256('ab12'); // Replace 'ab12' with the password to simulate
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Add more characters to make the brute force more comprehensive
const maxLength = 5; // Maximum length of the password to attempt

bruteForcePassword(targetHash, characters, maxLength);