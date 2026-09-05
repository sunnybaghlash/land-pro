const serviceModel= require("../models/services");
exports.serviceControllers=async(req,res,next)=>{
    try
    {
    const data= await serviceModel.getServices();
    console.log(data);
    return res.status(200).json({sucess:true,data:data})

    }
    catch(e)
    {
        next(e)
    }
    


}
exports.getServicePackagesById=async(req,res,next)=>{
    try
    {
            const {serviceName}=req.body;
            console.log(serviceName)
            // const serviceName="asda"
            if(!serviceName)
                return res.status(400).json({message:"Not Service Id is found"})
            const result=await serviceModel.getServicePackageByServiceId(serviceName);
            console.log(result)
            return res.status(200).json({message:"sucess",data:result})
    }
    catch(e)
    {
        next(e)
    }
}