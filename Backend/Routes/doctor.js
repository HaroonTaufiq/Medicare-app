import express from "express";
import { updateDoctor, deleteDoctor, getSingleDoctor, getAllDoctors } from "../Controllers/doctorController.js";
import { authenticate,restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";


const router = express.Router();

router.use('/:doctotid/reviews',reviewRouter);

router.get("/:id", authenticate,restrict(['doctor']), getSingleDoctor);
router.get("/", authenticate,restrict(['admin']), getAllDoctors);
router.put("/:id", authenticate,restrict(['doctor']), updateDoctor);
router.delete("/:id",authenticate,restrict(['doctor']), deleteDoctor);

export default router;