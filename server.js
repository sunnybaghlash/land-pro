const app=require("./src/app");
const pool = require("./src/config/db");
const PORT= process.env.PORT ||5000;
const startServer= async()=>{
    try
    {
        // await pool.query("SELECT 1")
        console.log("connected sucessfully  ");
        app.listen(PORT,()=>{
            console.log(`server is listening on ${PORT}`)
        })
    }

    catch(e)
    {
        console.log(e)
    }
}
startServer()

    // res.send("hello world")
