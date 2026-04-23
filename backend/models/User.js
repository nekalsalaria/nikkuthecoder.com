const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  photoURL: String,

  progress: {
    type: Object,
    default: {}, // { "array-1": true, "string-2": true }
  },

  notes: {
    type: Object,
    default: {},
  },

  streak: {
    type: Number,
    default: 0,
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);