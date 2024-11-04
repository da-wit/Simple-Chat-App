import User from "../models/user.model.js";

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

        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic:gender === 'male' ? boyProfilePic : girlProfilePic
        });

        await newUser.save()

        return res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            profilePic:newUser.profilePic
        });
    } catch (error) {
        console.log("error after before it gets to the controller logic",error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
};

export const logIn = (req,res) => {
    return res.send("login route")
}
export const logOut = (req,res) => {
    return res.send("logout route")
}