/**
 * Required External Modules
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { clientOrigins, serverPort } = require("./config/env.dev");

const { messagesRouter } = require("./messages/messages.router");

/**
 * App Variables
 */

const app = express();
const apiRouter = express.Router();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());

app.use("/api", apiRouter);

apiRouter.use("/messages", messagesRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});
app.get("/test", (req, res) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});
const path = require('path')

//declaration
app.use(express.static(path.join(__dirname, '/../client/build')));
//production mode
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/../client/build')));
    app.get('*', (req, res) => { res.sendfile(path.join(__dirname = '/../client/build/index.html')); })
}
//build mode
app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/../client/public/index.html'));})

if (app.get('env') === 'production') {
  sess.cookie.secure = true
  sess.proxy = true
  app.set('trust proxy', 1)
}
/**
 * Server Activation
 */

app.listen(process.env.PORT || serverPort, () =>
  console.log(`API Server listening on port ${serverPort}`)
);
