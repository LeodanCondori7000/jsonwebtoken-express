const { Router } = require("express");
const router = Router();
// const {
//   getProducts,
//   createProduct,
//   updateProductById,
//   deleteProductById,
//   getProductById,
// } = require("../controllers/products.controller.js");
const productsCtrl = require("../controllers/products.controller.js");
// const { verifyToken, isModerator } = require("../middlewares");
const { authJwt } = require("../middlewares");

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModerator],
  productsCtrl.createProduct
);

router.get("/", productsCtrl.getProducts);

router.get("/:productId", productsCtrl.getProductById);

router.put(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.updateProductById
);

router.delete(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.deleteProductById
);

module.exports = router;
