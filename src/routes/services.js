const express= require('express')
const router=express.Router();
const serviceControllers= require("../controllers/services")
router.get("/services",serviceControllers.serviceControllers);
router.post("/servicePackages",serviceControllers.getServicePackagesById)
module.exports=router;
