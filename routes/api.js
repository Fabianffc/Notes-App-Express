var db = require("../db/db.json")
var router = require("express").Router()
const { v4: uuidv4 } = require('uuid');
var fs = require("fs")

//Api route GET
router.get("/api/notes", function(req, res){
     res.json(db)
})
//Api route POST
router.post("/api/notes", function(req, res){
  req.body.id = uuidv4()
    db.push(req.body)
    console.log(db);
    fs.writeFile("./db/db.json",JSON.stringify(db),function(error){
      if (error){
        console.log(error);
    
      }
      res.json(db)
    })
})

//Api route DELETE
router.delete("/api/notes/:id",function(req, res){
    console.log(req.params.id);
    var id = req.params.id
    for(var i = 0; i<db.length; i++){
         if (db[i].id === id){
           db.splice(i,1)
         }
    }
    fs.writeFile("./db/db.json",JSON.stringify(db),function(error){
      if (error){
        console.log(error);
      }
      res.json(db)

    })
});

module.exports = router
