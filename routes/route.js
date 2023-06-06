const express = require("express")
const {post  , get , getAll , Update , Delete , hello} = require("../controllers/controller")
const router = express.Router()
router.get('/',hello)
router.post("/post",post)
router.get("/all",getAll)
router.get("/get/:id",get)
router.put("/update/:id",Update)
router.delete("/delete/:id",Delete)

module.exports = router