const express = require('express');
const router = express.Router();
const con = require('../connections/connection.js')

router.route("/all")
      .get((req,res)=>{
          console.log(req.url);
          let sql = `SELECT * FROM notes`;
          con.query(sql,function(err,row,field){
              if(err) console.log(err)
              else res.send(row);
          })
      })



module.exports = router;