const express= require('express')
const router=express.Router();
const serviceControllers= require("../controllers/services");
const { authMiddleware } = require('../middlewares/authMiddleware');
router.get("/services",authMiddleware,serviceControllers.serviceControllers);
router.post("/servicePackages",authMiddleware,serviceControllers.getServicePackagesById)
module.exports=router;
