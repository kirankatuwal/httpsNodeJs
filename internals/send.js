const REQUEST_TIMEOUT = 1;

function send(url, data) {
    const encryptData = encrypt(data);
    console.log(`Js Encrypted to ${encryptData}`);
}

function encrypt(data) {
    return 'Success Encrypted!!';
}

module.exports = {
    REQUEST_TIMEOUT,
    send,
}