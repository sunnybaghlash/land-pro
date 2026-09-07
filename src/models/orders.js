const pool=require("../config/db")
//by user Id
exports.getAllOrderOfUser=async(user_id)=>{
    const query=`select * from orders where user_id=$1`;
    const result= await pool.query(query,[user_id]);
    return result.rows;
}
//all orders
exports.getAllOrders=async()=>{
    const query=`select * from orders`;
    const result= await pool.query(query);
    return result.rows;

}
//current orders
exports.getCurrentsOrderOfUser=async(user_id)=>{
     const query=`select * from orders where user_id= $1 AND status=$2`;
    const result= await pool.query(query,[user_id,'pending']);
    return result.rows;

}

exports.postOrderByUserId=async(user_id,service_package_id,subtotal,discount,total_amount,advance_amount,paid_amount,details,district,tehsil,village,userName,mobile)=>{
    const query=`insert into orders(user_id,service_package_id,subtotal,discount,total_amount,advance_amount,paid_amount,details,district,tehsil,village,username,mobile)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) returning *`;
    const result= await pool.query(query,[user_id,service_package_id,subtotal,discount,total_amount,advance_amount,paid_amount,details,district,tehsil,village,userName,mobile]);
    return result.rows[0]
}
exports.updateOrder=async(orderId,statusValue)=>{
    console.log(orderId,statusValue)
    const query=`update orders set status=$1,updated_at=now() where id=$2 returning *`;
    const result= await pool.query(query,[statusValue,orderId]);
    return result.rows[0]
}
//UPDATE ORDERS DETAILS
//UPDATE NOTE,STATUS,PENDGING AMOUNT 
exports.updateOrder