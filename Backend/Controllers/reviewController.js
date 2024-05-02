import Review from '../Models/ReviewSchema.js';
import Doctor from '../Models/DoctorSchema.js';

// get all reviews
export const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json({success:true,msg:"Successful",data:reviews});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}; 

// create review
export const createReview = async (req, res) => {

    if (!req.body.doctor) req.body.doctor = req.params.doctorid;
    if (!req.body.user) req.body.user = req.params.userid;

    const newReview = new Review(req.body);

    try {
        const savedReview = await newReview.save();

        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push: { reviews: savedReview._id }
        });

        res.status(200).json({success:true,msg:"Successful",data:savedReview});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}