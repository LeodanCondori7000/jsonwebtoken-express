const { Router } = require("express");
const userCtrl = require("../controllers/user.controller");
const { authJwt, verifySignup } = require("../middlewares");
const router = Router();

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkExistingRole],
  userCtrl.createUser
);
module.exports = router;
