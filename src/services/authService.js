const {OAuth2Client}=require("google-auth-library")
const jwt=require("jsonwebtoken")
const authModel=require("../models/authModel");
const googleClient=new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
exports.googleLogin=async(idToken)=>{

    const ticket = await googleClient.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID
    });
    const payLoad= ticket.getPayload();
    const googleId=payLoad.sub;
    const email=payLoad.email;
    const name=payLoad.name;


    const user= await authModel.findUserByEmail(email)
    if(!user)
    {
        user= await authModel.createUser(name,email)
    }
    try
    {
        await authModel.createAuthProvider(user.id,"google",googleId)
    }
    catch(e)
    {
            if (error.code !== "23505") {
            throw error;
        }
    }
    const token = jwt.sign({userId:user.id,role:user.role},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN||"15m"})
    return {user,token}

}