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
exports.updateProfile = async (userId, name, phone,district,tehsil,village) => {

    const fields = [];
    const values = [];
    let index = 1;

    if (name !== undefined) {
        fields.push(`name = $${index++}`);
        values.push(name.trim());
    }

    if (phone !== undefined) {
        fields.push(`phone = $${index++}`);
        values.push(phone);
    }
if(district!== undefined)
{
    fields.push(`district=$${index++}`);
    values.push(district)
}
if(tehsil!== undefined)
{
    fields.push(`tehsil=$${index++}`);
    values.push(tehsil)
}
if(village!== undefined)
{
    fields.push(`village=$${index++}`);
    values.push(village)
}


    values.push(userId);

    const query = `
        UPDATE users
        SET ${fields.join(", ")},
            updated_at = NOW()
        WHERE id = $${index}
        RETURNING id, name, email, phone,tehsil,district,village updated_at
    `;

    const result = await pool.query(query, values);

    return result.rows[0];
};