const {Router} = require("express");
const router = Router();
const {createUser} = require("../controllors/userController");


router.post("/users",createUser);

module.exports=router;

