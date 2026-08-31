const express = require("express");
const router = express.Router();
const {authMiddleware}=require("../middlewares/authMiddleware")

const authController = require("../controllers/authControllers");

router.post("/google",authController.googleLogin);

router.get("/me", authMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user
    });
});

module.exports = router;
