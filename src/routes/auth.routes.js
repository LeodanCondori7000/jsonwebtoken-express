const { Router } = require("express");
const router = Router();
const authCtrl = require("../controllers/auth.controller.js");
const { verifySignup } = require("../middlewares");

router.post(
  "/signup",
  [verifySignup.checkExistingUser, verifySignup.checkExistingRole],
  authCtrl.signup
);

router.post("/signin", authCtrl.signin);

module.exports = router;
