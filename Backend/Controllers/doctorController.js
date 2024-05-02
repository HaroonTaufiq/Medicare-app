import Doctor from "../Models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updateDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res
      .status(200)
      .json({
        success: true,
        msg: "Doctor updated successfully",
        data: updateDoctor,
      });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteDoctor = await Doctor.findByIdAndDelete(id);

    res.status(200).json({ success: true, msg: "Doctor deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id).populate('reviews').select("-password");

    res.status(200).json({ success: true, msg: "Doctor found", data: doctor });
  } catch (err) {
    res.status(404).json({ success: false, msg: err.message });
  }
};

export const getAllDoctors = async (req, res) => {
    try {
      const { query } = req.query;
      let doctors;
  
      if (query) {
        doctors = await Doctor.find({
          isApproved: "approved",
          $or: [
            { name: { $regex: query, $options: "i" } },
            { specialization: { $regex: query, $options: "i" } },
          ],
        }).select("-password");
      } else {
        doctors = await Doctor.find({isApproved: "approved"}).select("-password");
      }
  
      res
        .status(200)
        .json({ success: true, msg: "Doctors found", data: doctors });
    } catch (err) {
      res.status(404).json({ success: false, msg: err.message });
    }
  };
