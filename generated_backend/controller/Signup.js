const User= require('../Modals/user')
const Signupinfo=async (req, res) => {
    const { name, email, password, phone, zip } = req.body;
  
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create new user
      const newUser = new User({ name, email, password, phone, zip });
      await newUser.save();
  
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
}
module.exports=Signupinfo;