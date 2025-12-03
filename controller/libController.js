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
    deleteBook(req,res){
      const id=req.params.id;
      db.query("delete from library where id=?",[id],
        (err)=>{
            if(err){
                return res.json({
                    message:"Book not deleted"
                });
            }
               return res.json({
                    message:"book deleted"
                });
            }
      );
    }
    getAllBook(req,res){
        db.query("select * from library",
            (err,result)=>{
                if(err){
                 return res.json({
                        message:"data not found"
                    });
                }
                return res.json({
                    message:"data found",
                    data:result
                })
            })
    }

}
export default new librarymanagementsystem();