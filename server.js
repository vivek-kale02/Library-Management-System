import express from "express"
import cors from "cors"
import "./backend/database/dbConnection.js"
import route from "./backend/routes/route.js"
const app=express();
app.use(express.json());
app.use(cors({
    origin:"*"
}))
app.use("/Lib",route)
app.listen(3000,()=>{
    console.log("server started");
});