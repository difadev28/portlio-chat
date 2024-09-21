import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const login = async (req, res) => {
 
}

export const logout = (req, res) => {
    console.log("Logout User")
}

export const signup = async (req, res) => {
  try {
    const {fullName, username, password, confirmPassword, gender} = req.body;
    if(password !== confirmPassword) {
      return res.status(400).json({error: "Password don;t match"})
    }
    const user = await User.findOne({username});
    if(user) {
      return res.status(400).json({error: "Username already exists"})
    }
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)
    const profilePic = `https://avatar.iran.liara.run/username?username=${username}`
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic
    })
    if(newUser) {
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: profilePic
      })
    } else {
      res.status(400).json({error: "Invalid User Data"})
    }
    
  } catch(error) {
      console.log("Error in signup", error)
      res.status(500).json({error: "Internal Server Error"})
  }
}

