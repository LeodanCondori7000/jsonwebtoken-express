const { Schema, model } = require("mongoose");

const ROLES = ["user", "admin", "moderator"];
const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

const Role = model("Role", roleSchema);

module.exports = Object.assign(Role, { ROLES });
