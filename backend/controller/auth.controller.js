export const login = async (req, res) => {
    try {
      const {fullName, username, password, confirmPassword, gender} = req.body;
    } catch(error) {
      
    }
}

export const logout = (req, res) => {
    console.log("Logout User")
}

export const signup = (req, res) => {
    console.log("signUp User")
}

