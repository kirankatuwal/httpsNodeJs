// module.exports = {
//     ...require('./send'),
//     ...require('./read'),
// }

const request = require('./send');
const response = require('./read');

module.exports = {
    send: request.send,
    read: response.read,
}