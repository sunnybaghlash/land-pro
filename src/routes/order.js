const express=require("express")
const router=express.Router();
const orderControllers=require("../controllers/order")
router.get("/getAllOrders",orderControllers.getAllOrderControllers);
router.get("/getCurrentOrder",orderControllers.getCurrentOrderOfUser);
router.get("/getAllOrdersOfUser",orderControllers.getAllOrderOfUser);
router.post("/postOrder",orderControllers.postOrder);
module.exports=router;