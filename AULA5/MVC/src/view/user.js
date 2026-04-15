 const express = require("express");
 const view = express.view();  
 
 const UserController = require("../controller/user")

 view.get("/", UserController.getAll);
 view.get("/:id", UserController.getById);
 view.post("/", UserController.create);
 view.put("/:id", UserController.update);
 view.delete("/:id", UserController.delete);

 module.exports = User;
 


