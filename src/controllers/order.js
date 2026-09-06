const pool = require("../config/db");
const orderModel=require("../models/orders")
exports.getAllOrderControllers=async(req,res,next)=>{
    try
    {
        const data= await orderModel.getAllOrders();
        console.log(data);
        res.status(200).json({data:data,sucess:true})
    }
    catch(e)
    {
        next(e)
    }

}
exports.getCurrentOrderOfUser=async(req,res,next)=>{
    try
    {
        const {user_id}=req.body;
        const data= await orderModel.getCurrentsOrderOfUser(user_id);
        console.log(data);
        res.status(200).json({data:data,success:true})
    }
    catch(e)
    {
        next(e)
    }
}
exports.getAllOrderOfUser=async(req,res,next)=>{
    try
    {
        const{user_id}=req.body;
        const data=await orderModel.getAllOrderOfUser(user_id);
        console.log(data);
        res.status(200).json({data:data})
    }
    catch(e)
    {
        next(e)
    }
}
exports.postOrder=async(req,res,next)=>{
    try
    {
        const {user_id,service_package_id,subtotal,discount,total_amount,advance_amount,paid_amount,details,district,tehsil,village,userName,mobile}=req.body;
            const result= await orderModel.postOrderByUserId(user_id,service_package_id,subtotal,discount,total_amount,advance_amount,paid_amount,details,district,tehsil,village,userName,mobile);
        console.log(result);
        res.status(200).json({data:result})
    }
    catch(e)
    {
        next(e)
    }
}
exports.updateOrder=async(req,res,next)=>{
    try
    {
        const {userId}=req.body;
        const {status}=req.body;
        const result= await orderModel.updateOrder(userId,status);
       
        res.status(200).json({result:result,message:true})
    }
    catch(e)
    {
        next(e)
    }
}