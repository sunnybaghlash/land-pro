const authModel=require("../models/authModel")
const authService=require("../services/authService")


exports.googleLogin = async (req, res, next) => {
    try {
        const { idToken } = req.body;

        if (!idToken) {
            return res.status(400).json({
                success: false,
                message: "Google ID token is required"
            });
        }

        const result = await authService.googleLogin(idToken);

        return res.status(200).json({
            success: true,
            message: "Google login successful",
            data: result
        });

    } catch (error) {
        next(error);
    }
};