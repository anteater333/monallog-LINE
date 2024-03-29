const server = require('http').createServer();

const config = require('./config');
const logger = require('./logger');

/** Greetings! ****************************************/
logger.info('monallog socket.io server starts running.')
/******************************************************/

// set socket.io server
const io = require('./socket')(server);

server.listen(config.PORT, '0.0.0.0', () => {
    logger.info(`listening on ${config.PORT} port!`)

    myTester();
});


const myTester = () => {
    
}