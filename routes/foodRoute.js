const {Router} = require("express")
const { createFood, getMenu } = require("../controllors/foodControllor")
const {protect} = require("../middlewares/authMiddlewares");

const router = Router()
router.route("/food").post(protect, createFood).get(protect, getMenu)


module.exports = router 