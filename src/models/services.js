const pool=require("../config/db");
exports.getServices=async()=>{
    const query=`select * from services;`;
    const result= await pool.query(query);
    console.log(result)
    return result.rows
}
exports.getServicePackageByServiceId=async(service_name)=>{
    const query=`select * from service_packages t2 join services t1 on t1.id=t2.service_id where t1.service_name=$1`;
    const result=await pool.query(query,[service_name]);
    console.log(result.rows);
    return result.rows[0]
}
