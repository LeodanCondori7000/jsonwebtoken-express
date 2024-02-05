const app = require("./app.js");
require("./database");

app.listen(3000, () => {
  console.log("server listening on port: ", 3000);
});
