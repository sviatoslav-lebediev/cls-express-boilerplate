const express = require('express');
const uuid = require('uuid');
const ctx = require('./ctx');
const controller = require('./controller');

const clsMiddleware = (req, res, next) => {
    ctx.getNamespace().run(() => next());
};

const contextIdGenerator = (req, res, next) => {
    ctx.setContextId(uuid());

    return next();
};

const app = express();

app.use(clsMiddleware);
app.use(contextIdGenerator);
app.get('/', controller.index);

app.listen(7272);
