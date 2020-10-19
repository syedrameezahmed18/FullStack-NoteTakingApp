const express = require('express');
const router = express.Router();
const con = require('../connections/connection.js')

router.route("/del/:id")
      .delete((req,res)=>{
          var sql=`DELETE FROM notes WHERE id = ${req.params.id}`;
          con.query(sql,(err)=>{
              if(err) {console.log(err)}
              else {res.send(`id ${req.params.id} removed`)}
              console.log(`deleted`)
              
          })
          
      })

module.exports=router;      