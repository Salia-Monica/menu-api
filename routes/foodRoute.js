const {Router} = require("express")
const { createFood, getMenu } = require("../controllors/foodControllor")
const {protect, admin} = require("../middlewares/authMiddlewares");

const router = Router()
router.route("/food").post(protect, admin, createFood).get(protect, getMenu)


module.exports = router 