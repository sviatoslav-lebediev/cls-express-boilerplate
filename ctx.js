const { createNamespace, getNamespace } = require('cls-hooked');

module.exports = {
    getNamespace() {
        return getNamespace('thread-context') || createNamespace('thread-context');
    },
    setContextId(contextId) {
        this.getNamespace().set('context-id', contextId);
    },
    getContextId() {
        return this.getNamespace().get('context-id');
    }
};
