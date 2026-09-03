const pool=require("../config/db")
exports.findUserByEmail = async (email) => {

    const query = `
        SELECT *
        FROM users
        WHERE email = $1
    `;

    console.log("ACTUAL SQL:", JSON.stringify(query));
    console.log("EMAIL:", email);

    const result = await pool.query(query, [email]);

    return result.rows[0];
};
exports.createUser=async(name,email)=>{
    const query=`insert into users(name,email) values($1,$2) returning *;`
    const result= await pool.query(query,[name,email])
    return result.rows[0]
}
exports.createAuthProvider=async(userId,provider,providerUserId)=>{
    const query=`insert into auth_provider(user_id,provider,provider_user_id) values($1,$2,$3) returning *`;
    const result =await pool.query(query,[userId,provider,providerUserId])
    return result.rows[0]
}