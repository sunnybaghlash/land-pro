const pool=require("../config/db")

exports.findUserByEmail=async(email)=>{
    const query=`select * from users where email=$1 returning *`
    const result= await pool.query(query,[email]);
    return result.rows[0]

}
exports.createUser=async(name,email)=>{
    const query=`insert into users(name,email) values($1,$2) returning *;`
    const result= await pool.query(query,[name,email])
    return result.rows[0]
}
exports.createAuthProvider=async(userId,provider,providerUserId)=>{
    const query=`insert into user_auth_providers(user_id,provider,provider_user_id) values($1,$2,$3) returning *`;
    const result =await pool.query(query,[userId,provider,providerUserId])
    return result.rows[0]
}