   const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const authModel = require("../models/authModel");

const googleClient = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID
);

exports.googleLogin = async (idToken) => {
    try {
        console.log("========== GOOGLE DEBUG ==========");

        console.log("1. Token received:", !!idToken);

        console.log(
            "2. GOOGLE_CLIENT_ID:",
            process.env.GOOGLE_CLIENT_ID
        );

        const ticket = await googleClient.verifyIdToken({
            idToken,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        console.log("3. TOKEN VERIFIED");

        const payLoad = ticket.getPayload();

        console.log("4. Token AUD:", payLoad.aud);
        console.log("5. Email:", payLoad.email);

        const googleId = payLoad.sub;
        const email = payLoad.email;
        const name = payLoad.name;

        console.log("6. Finding user...");

        let user = await authModel.findUserByEmail(email);

        console.log("7. User:", user);

        if (!user) {
            console.log("8. Creating user...");
            user = await authModel.createUser(name, email);
        }

        console.log("9. Creating auth provider...");

        try {
            await authModel.createAuthProvider(
                user.id,
                "google",
                googleId
            );
        } catch (e) {
            if (e.code !== "23505") {
                throw e;
            }
        }

        console.log("10. Creating JWT...");

        const token = jwt.sign(
            {
                userId: user.id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn:
                    process.env.JWT_EXPIRES_IN || "15m"
            }
        );

        console.log("11. SUCCESS");

        return {
            user,
            token
        };

    } catch (error) {
        console.error("========== GOOGLE LOGIN ERROR ==========");
        console.error(error);
        throw error;
    }
};