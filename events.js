
const EventEmitter = require('events');
// const emitter = new EventEmitter();

// Register a listener
// emitter.on('messageLogged', function(){
//     console.log('Listener called');
// });

// emitter.on('messageCalled', function(arg){
//     console.log('message is called', arg);
// });

// emitter.on('logging', (arg) => {
//     console.log('logged in and the data is:', arg);
// });

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageCalled', (arg) => {
    console.log('called message', arg);
});

logger.log('ruchith');

// // emit -> making noise, producing signalling
// emitter.emit('messageLogged');


// emitter.emit('logging',{String: 'data'});