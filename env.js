require("dotenv").config();
// Another way to use .env file w/o "require" is by writing "node -r dotenv/config env.js"
console.log(process.env.NAME)
console.log(process.env.PROFESSION);