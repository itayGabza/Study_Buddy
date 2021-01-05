
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { clientOrigins, serverPort } = require("./config/env.dev");

const app = express();
const apiRouter = express.Router();
// app.use(helmet());                 //helmet is used for securing the Express apps by HTTP headers
app.use(cors({
  origin: '*',                        // Website you wish to allow to connect
  methods: 'GET, POST, PUT, DELETE',  // Request methods you wish to allow
  allowedHeaders: '*',                // Request headers you wish to allow
  credentials: true                   // to the API (e.g. in case you use sessions)
}
));
app.use(express.json());
app.use("/api", apiRouter);
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

require("./routes/turorial.routes.js")(app);
require("./routes/students.routes.js")(app);
require("./routes/courses.routes.js")(app);
require("./routes/degrees.routes.js")(app);
require("./routes/studOpenDets.routes.js")(app);
require("./routes/reqAv.routes.js")(app);
require("./routes/requests.routes.js")(app);
require("./routes/studOpenByMatches.routes.js")(app);

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
  app.get('*', function (req, res) {
    res.sendFile('/../client/public/index.html', { root: __dirname }, function (err) {
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
