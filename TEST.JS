
require("dotenv").config();
const pool = require("./src/config/db");

async function testDB() {
    const result = await pool.query("SELECT NOW()");
    console.log(result.rows);
}

testDB();