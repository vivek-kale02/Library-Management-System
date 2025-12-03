import mysql from "mysql2"
const dbconnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"librarymanagementsystem"
})
dbconnection.connect((err)=>{
   if(err){
    console.log("error in connection to databses");
   }
   else{
    console.log("database connected...");
   }
});

export default dbconnection;