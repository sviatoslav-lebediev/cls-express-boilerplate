const ctx = require('./ctx');
const logger = require('./logger');

module.exports.index = (req, res) => {
    const contextId = ctx.getContextId();

    logger.info('index controller');

    res.header('context-id', contextId).json({ contextId });
};
