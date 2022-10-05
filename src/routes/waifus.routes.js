const express = require("express");
const router = express.Router();
const {
    index,
    create,
    update,
    destroy,
    show,
} = require("../controllers/waifus.controller");
// obtiene todos los recursos
router.get("/", index);
// crear recursos
router.post("/create", create);
// editar
router.put("/update/:waifu", update);
// elimine
router.delete("/delete/:waifu", destroy);
// mostrar un registro
router.get("/show/:waifu", show);

module.exports = router;
