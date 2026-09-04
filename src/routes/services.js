const express= require('express')
const router=express.Router();
const serviceControllers= require("../controllers/services")
router.get("/services",serviceControllers.serviceControllers);
router.get("/servicePackages",serviceControllers.getServicePackagesById)
module.exports=router;
