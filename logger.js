const ctx = require('./ctx');

module.exports = {
    info: (...data) => {
        console.log({
            contextId: ctx.getContextId(),
            data
        });
    }
};
