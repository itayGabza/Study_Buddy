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
// app.use(helmet());
app.use(cors({
   // Website you wish to allow to connect
   origin: '*',
   // Request methods you wish to allow
   methods: 'GET, POST, PUT, DELETE',
   // Request headers you wish to allow
   allowedHeaders: '*',
   // to the API (e.g. in case you use sessions)
   credentials: true}
));
app.use(express.json());

app.use("/api", apiRouter);

apiRouter.use("/messages", messagesRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});


require("./routes/turorial.routes.js")(app);
const db = require("./models/db.js");

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

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


app.listen(process.env.PORT || serverPort, () =>
    console.log(`API Server listening on port ${serverPort}`)
  );
