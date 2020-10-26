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
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
const path = require('path')

//declaration
app.use(express.static(path.join(__dirname, '/../client/build')));
//production mode
if (process.env.NODE_ENV === 'production') {
  app.get('*', function(req, res) {
    res.sendFile('/../client/public/index.html', { root: __dirname }, function(err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  }
//build mode
app.get('*', (req, res) => { res.sendFile(path.join(__dirname + '/../client/public/index.html')); })

// if (app.get('env') === 'production') { we maybe need this.
//   sess.cookie.secure = true
//   sess.proxy = true
//   app.set('trust proxy', 1)
// }
/**
 * Server Activation
 */

app.listen(process.env.PORT || serverPort, () =>
    console.log(`API Server listening on port ${serverPort}`)
  );
