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

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '/../client/build')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/public/index.html'))
})

/**
 * Server Activation
 */

app.listen(process.env.PORT || serverPort, () =>
  console.log(`API Server listening on port ${serverPort}`)
);
