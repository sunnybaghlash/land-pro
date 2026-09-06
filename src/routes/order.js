const express=require("express")
const router=express.Router();
const orderControllers=require("../controllers/order")
router.get("/getAllOrders",orderControllers.getAllOrderControllers);
router.post("/getCurrentOrder",orderControllers.getCurrentOrderOfUser);
router.post("/getAllOrdersOfUser",orderControllers.getAllOrderOfUser);
router.post("/postOrder",orderControllers.postOrder);
router.put("/updateOrder",orderControllers.updateOrder)
module.exports=router;