const express=require("express")
const {authMiddleware}=require("../middlewares/authMiddleware")

const router=express.Router();
const orderControllers=require("../controllers/order")
router.get("/getAllOrders",authMiddleware,orderControllers.getAllOrderControllers);
router.post("/getCurrentOrder",authMiddleware,orderControllers.getCurrentOrderOfUser);
router.post("/getAllOrdersOfUser",authMiddleware,orderControllers.getAllOrderOfUser);
router.post("/postOrder",authMiddleware,orderControllers.postOrder);
router.put("/updateOrder",authMiddleware,orderControllers.updateOrder)
module.exports=router;