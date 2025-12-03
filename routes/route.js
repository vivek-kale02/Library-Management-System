import express from "express"
import route from "../controller/libController.js"
const router=express.Router();
router.post("/add",route.addNewBook)
router.put("/update",route.updateBook)
router.delete("/delete/:id",route.deleteBook)
router.get("/allbooks",route.getAllBook)
export default router;