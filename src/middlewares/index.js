// const { verifyToken, isModerator } = require("./authJwt.js");
const authJwt = require("./authJwt.js");
const verifySignup = require("./verifySignup.js")

// module.exports = {
//   verifyToken,
//   isModerator
// };

module.exports = { authJwt, verifySignup };
