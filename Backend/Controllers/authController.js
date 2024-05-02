import User from "../Models/UserSchema.js"
import Doctor from "../Models/DoctorSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const generateToken = user => {
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{expiresIn:"1d"})
}

export const register =async(req,res) => {

    const {email,password,name,role,photo,gender} = req.body

    try{
        let user = null

        if(role == 'patient'){
            user = await User.findOne({email})
        }
        else if(role == 'doctor'){
            user = await Doctor.findOne({email})
        }

        // check if user already exists
        if (user) {
            return res.status(400).json({msg: "User already exists"})
        }

        // hash 
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt) 

        if (role == 'patient'){
            user = new User ({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            })
        }

            if (role == 'doctor'){
                user = new Doctor ({
                    name,
                    email,
                    password:hashPassword,
                    photo,
                    gender,
                    role
                })
            }

            await user.save()

            res.status(200).json({success:true,msg:"User created successfully"})

    }
    catch(err){
        res.status(500).json({success:false,msg:err.message})

    }
}

export const login =async(req,res) => {

    const {email} = req.body

    try{

        let user = null

        const patient = await User.findOne({email});
        const doctor = await Doctor.findOne({email});
        
        if (patient){
            user = patient
        }
        if (doctor){
            user = doctor
        }

        // check if user exists or not
        if (!user){
            return res.status(400).json({msg:"User doesn't exists"})
        }

        // compare passwords
        const isPasswordMatch = await bcrypt.compare(req.body.password,user.password)

        if (!isPasswordMatch){
            return res.status(400).json({status:false,msg:"Incorrect password"})
        }

        // get token
        const token = generateToken(user);

        const {passwor,role,appointments,...rest} = user._doc

        res.status(200).json({status:true,msg:"Successfully Login",token, data:{...rest}, role})
    }
    catch(err){
        res.status(500).json({success:false,msg:err.message}) 
    }
}