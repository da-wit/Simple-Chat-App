import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookies from "../utils/generateToken.js";

export const signUp = async(req,res)=> {
    try {
        const {fullName,username,password,confirmpassword,gender} = req.body;
        if(password != confirmpassword){
            return res.status(400).json({error:"Password doesn't match"})
        }
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({error:"username already taken"})
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password,salt);
        

        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic:gender === 'male' ? boyProfilePic : girlProfilePic
        });

        if(newUser){

            generateTokenAndSetCookies(newUser._id,res)
            await newUser.save()
            return res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                username:newUser.username,
                profilePic:newUser.profilePic
            });
        }


    } catch (error) {
        console.log("error after before it gets to the controller logic",error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
};

export const logIn = async (req,res) => {
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username:username});
        if(!user){
            return res.status(400).json({error:"username does not exist"});
        }
        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).json({error:"Invalid username or password"})
        }
        generateTokenAndSetCookies(user._id,res);

        return res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic
        })

    } catch (error) {
        console.log("Error before the actual login logic",{error:error.message})
        return res.status(500).json({error:"Internal Server Error"})
    }
}
export const logOut = (req,res) => {
    try {
        res.cookie("jwtToken","",{maxAge:0});
        return res.status(200).json({message: "Logged Out successfully"})
    } catch (error) {
        console.log("Error before the actual logout logic",{error:error.message})
        return res.status(500).json({error:"Internal Server Error"})
    }
}