
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