const express = require("express")
const {post  , get , getAll , Update , Delete} = require("../controllers/controller")
const router = express.Router()
router.post("/post",post)
router.get("/",getAll)
router.get("/get/:id",get)
router.put("/update/:id",Update)
router.delete("/delete/:id",Delete)

module.exports = router