var db = require("../db/db.json")
var router = require("express").Router()

router.get("/api/notes", function(req, res){
     res.json(db)
})

router.post("/api/notes", function(req, res){
  console.log(req.body);
    db.push(req.body)
   
    res.json(db)
})

module.exports = router
