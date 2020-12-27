
const dotenv = require("dotenv");

dotenv.config();

require('dotenv').config('C:\Users\Owner\Documents\VS PROJECTS\Study_Buddy\auth0-express-js-sample\.env');

// require('dotenv').config({ path: 'C:\Users\Owner\Documents\VS PROJECTS\Study_Buddy\auth0-express-js-sample\.env' })
// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, 'C:\Users\Owner\Documents\VS PROJECTS\Study_Buddy\auth0-express-js-sample/.env') })

// const audience = process.env.AUTH0_AUDIENCE;
// const issuerUrl = process.env.AUTH0_ISSUER_URL;
// const serverPort = process.env.SERVER_PORT;
// const clientOriginUrl = process.env.CLIENT_ORIGIN_URL;



// console.log(require('dotenv').config())


console.log("start-------------------------------------");
console.log("audience is - ", process.env.AUTH0_AUDIENCE);
console.log("end --------------------------------------");
// console.log("env is" , process.env);

process.exit();




// // yuvals tryouts -------------------------------------------------------------------------------------------------------------------------------------------------
// const sequelize = require("sequelize");


// // Params Example
// function returnHello(req, res) {
//   const id = req.params.id;
//   const stamMashu = req.params.stamMashu;
//   res.send("Your id is " + id + " and you also sent " + stamMashu);
// }
// app.get("/helloWorld/:id/:stamMashu", returnHello);

// //Body Example
// app.get("/helloWorld2/", (req, res) => {
//   const bodydata = req.body;

// });


// app.get("/test2", (req, res) => {
//   res.json(["whatsaapppp", "LLLL54isa", "Michael", "Ginger", "Food"]);
//   res.json([db.tutorials.json]);
// });
// app.get("/test3", (req, res) => {
//   const title = req.query.title;
//   var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

//   Tutorial.findAll({ where: condition })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// });

// const Tutorials = db.tutorials;
// // const controller = require("./controllers/tutorial.controller");
// // const tut1 =  controller.create({
// //   title: "Tut#1",
// //   description: "Tut#1 Description",
// //   published: false,
// // });
// // end tryouts  ------------------------------------------------------------------------------------------------------------------------------------------------


// query
// studybudy.com/students => query = {}
// studybudy.com/students?title=xyz => query = { title: xyz}
// studybudy.com/students?title=xyz&firstName=yuval => query = { title: xyz, firstName: yuval}

// params
// in case ":name":
// studybudy.com/students/yuval => params = { name: "yuval" }

// body
// studybudy.com/students