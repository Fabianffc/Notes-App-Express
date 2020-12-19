var db = require("../db/db.json")
var router = require("express").Router()

//Api route GET
router.get("/api/notes", function(req, res){
     res.json(db)
})
//Api route POST
router.post("/api/notes", function(req, res){
    db.push(req.body)
    res.json(db)
})

//Api route DELETE
router.delete("/api/notes/:id",function(req, res){
  db.pop(req.body)
  res.json(db)
});

module.exports = router
