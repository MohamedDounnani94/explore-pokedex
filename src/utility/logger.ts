import pinologger from 'pino';

const logger = pinologger({
  level: process.env.LOG_LEVEL || 'info',
});

export default logger;