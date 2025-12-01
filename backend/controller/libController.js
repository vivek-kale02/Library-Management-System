import db from "../database/dbConnection.js"

class librarymanagementsystem{
    addNewBook(req,res){
        const {bname,bprice,bauthor}=req.body;
        db.query("insert into library (bname,bprice,bauthor) values(?,?,?)",
            [bname,bprice,bauthor],
            (err,result)=>{
               if(err){
                return res.status(500).json({
                    error:err
                })
            }
                return res.status(201).json({
                    message:"Book added",
                    data:result
                });
               
            });
    }
    updateBook(req,res){
        const {id,bname}=req.body;
        db.query("UPDATE library SET bname = ? WHERE id = ?;",
            [bname,id],
            (err,result)=>{
               if(err){
                return res.status(500).json({
                    error:err
                })
            }
                return res.status(201).json({
                    message:"Book updated",
                    data:result
                });
               
            });
    }

}
export default new librarymanagementsystem();