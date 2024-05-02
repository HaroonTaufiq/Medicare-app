import jwt from 'jsonwebtoken';
import Doctor from '../Models/DoctorSchema.js';
import User from '../Models/UserSchema.js';

export const authenticate = async (req, res, next) => {

  // get tokens from header
  const authtoken = req.headers.authorization;

  // check if token exists
  if (!authtoken || !authtoken.startsWith('Bearer')) {
    return res.status(401).json({
      success: false,
      msg: 'No token provided.'
    });
  }

  try {
    const token = authToken.split(' ')[1];

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;
    req.role = decoded.role;

    console.log(authToken)
    next()
  }
  catch (err) {

    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        msg: 'Token expired.'
      });
    }

    res.status(401).json({
      success: false,
      msg: err.message
    });
  }
}

export const restrict = roles => async (req, res, next) => {
  const userId = req.userId;

  let user;

  const patient = await User.findById(userId);
  const doctor = await Doctor.findById(userId);

  if (patient) {
    user = patient;
  }
  else if (doctor) {
    user = doctor;
  }

  if(!roles.includes(user.role)){
    return res.status(403).json({
      success: false,
      msg: 'You are not authorized to access this route'
    });
  }

  next()
}