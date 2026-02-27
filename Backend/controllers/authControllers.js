import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

//@desc   Register a new user
//@routes  POST  /api/auth/register
//@access   Public
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1.) Check empty
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All Field are Required",
      });
    }

    //2.) Check user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "user already exists",
      });
    }

    //3.) hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //4.) Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    //5.) send response with token
    res.status(201).json({
      success: true,
      message: "User Registered Successfully",

      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

//@desc   Login user
//@routes  POST  /api/auth/login
//@access   Public
const loginUser = async (req, res) => {
  try {
    const {email, password } = req.body;

    // 1.) Check empty
    if (!email || !password) {
      return res.status(400).json({
        message: "All Field are Required",
      });
    }

    //2.) find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email and password",
      });
    }

    //3.) compare password
    const isMatched = await bcrypt.compare(password, user.password);
    if(!isMatched){
        return res.status(400).json({
            message:"Invalid email and password"
        })
    }

    //4.) return user data with jwt
    res.status(201).json({
      success: true,
      message: "User LoggedIn Successfully",

      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

export  {registerUser, loginUser}
