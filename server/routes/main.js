const express = require("express");
const router = express.Router();

//Router
router.get("", (req, res) => {
  const locals = {
    title: "diariodebike",
    description:
      "Diario de Bike em Nova Esperança - PR, post quando eu conseguir pedalar kskksk.",
  };

  res.render("index", { locals });
});

//Router
router.get("/about", (req, res) => {
  const locals = {
    title: "diariodebike",
    description:
      "Diario de Bike em Nova Esperança - PR, post quando eu conseguir pedalar kskksk.",
  };
  res.render("about", { locals });
});

module.exports = router;
