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
exports.updateProfile = async (req, res, next) => {
    try {
        const { name, phone ,userId,district,tehsil,village} = req.body;

        // if (name === undefined && phone === undefined) {
        //     return res.status(400).json({
        //         success: false,
        //         message: "At least one field is required"
        //     });
        // }


        if (phone !== undefined && !/^[6-9]\d{9}$/.test(phone)) {
            return res.status(400).json({
                success: false,
                message: "Invalid phone number"
            });
        }

        const user = await authModel.updateProfile(userId, name, phone,district,tehsil,village);

        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: user
        });

    } catch (error) {
        next(error);
    }
};