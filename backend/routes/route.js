import express from "express"
import route from "../controller/libController.js"
const router=express.Router();
router.post("/add",route.addNewBook)
router.put("/update",route.updateBook)
export default router;