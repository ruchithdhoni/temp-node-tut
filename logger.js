const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message){
        // this will send and http request
        console.log(message);
    
        this.emit('messageCalled', {id: 1, url:'http://' });
    // Raising an event
    
    }
}

module.exports = Logger;
// module.exports.endPoint = url;

