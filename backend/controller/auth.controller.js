export const login = async (req, res) => {
    try {
      const {fullName, username, password, confirmPassword, gender} = req.body;
      if(password !== confirmPassword) {
        return res.status(400).json({error: "Password don;t match"})
      }
      const user = await User.findOne({username});
      if(user) {
        return res.status(400).json({error: "Username already exists"})
      }
      // Hash Password
    } catch(error) {
      
    }
}

export const logout = (req, res) => {
    console.log("Logout User")
}

export const signup = (req, res) => {
    console.log("signUp User")
}

