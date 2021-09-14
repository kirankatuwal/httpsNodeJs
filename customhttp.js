// const { send } = require('./internals/send');
// const { read } = require('./internals/read');

const { send, read } = require('./internals');

function customHttp(url, data) {
    send(url, data);
    return read();
}

const gottacatch = customHttp("https://google.com", "rocking");
console.log(gottacatch);