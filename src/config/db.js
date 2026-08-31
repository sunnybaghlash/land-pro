// const {Pool}=require("pg")
// require("dotenv").config({ override: true });

// const pool= new Pool({
//     host:process.env.DB_HOST,
//     port:process.env.DB_PORT,
//     user:process.env.DB_USER,
//     password:process.env.DB_PASSWORD,
//     database:process.env.DB_NAME
// });
// pool.on("connect",()=>{
//     console.log("postges database is connected");

// })
// pool.on("error",(err)=>{
//     console.log(`err is ${err}`)
// })
// module.exports=pool
const { Pool } = require("pg");
require("dotenv").config({ override: true });

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

pool.on("connect", () => {
    console.log("postgres database is connected");
});

pool.on("error", (err) => {
    console.log(`db error: ${err.message}`);
});

module.exports = pool;