import User from "../Models/UserSchema.js"

export const updateUser = async(req,res) => {
    const id = req.params.id 

    try {
        const updateUser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true})

        res.status(200).json({success:true,msg:"User updated successfully", data:updateUser})
    }
    catch (err){
        res.status(500).json({success:false,msg:err.message}) 
    } 
}

export const deleteUser = async(req,res) => {
    const id = req.params.id 

    try {
        const updateUser = await User.findByIdAndDelete(id)

        res.status(200).json({success:true,msg:"User deleted successfully"})
    }
    catch (err){
        res.status(500).json({success:false,msg:err.message}) 
    } 
}

export const getSingleUser = async(req,res) => {
    const id = req.params.id 

    try {
        const user = await User.findById(id).select("-password")

        res.status(200).json({success:true,msg:"User found", data:user})
    }
    catch (err){
        res.status(404).json({success:false,msg:err.message}) 
    } 
}

export const getAllUser = async(req,res) => {

    try {
        const users = await User.find({}).select("-password")

        res.status(200).json({success:true,msg:"Users found", data:users})
    }
    catch (err){
        res.status(404).json({success:false,msg:err.message}) 
    } 
}