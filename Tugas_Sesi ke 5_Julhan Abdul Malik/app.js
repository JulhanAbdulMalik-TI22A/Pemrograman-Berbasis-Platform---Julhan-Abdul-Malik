module.exports

const calculator = require('./calculator');
const greet = require('./greet');
const validator = require('./validator');
const logger = require('./logger');

const result = calculator.add(5, 3);
const greeting = greet.greetUser('julhanamalik');
const isEmailValid = validator.isEmailValid('julhanamalik@gmail.com');

logger.logMessage(`Addition result: ${result}`);
logger.logMessage(greeting);
logger.logMessage(`Is email valid? ${isEmailValid ? 'Yes' : 'No'}`);