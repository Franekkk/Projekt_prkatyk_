const mongoose = require("mongoose");
const verbsSchema = new mongoose.Schema({
  verb: {
    type: String,
    required: [true, "verb is required"],
    minLength: 2,
    maxLength: 40,
    trim: true,
    validate: {
      validator: function (value) {
        const nameRegex = /^[a-zA-Z]/;
        return nameRegex.test(value);
      },
      message: "verb must contain only alphabetic characters",
    },
  },
  sp: {
    type: String,
    required: [true, "Simple past is required"],
    minLength: 2,
    maxLength: 40,
    trim: true,
    validate: {
      validator: function (value) {
        const nameRegex = /^[a-zA-Z]/;
        return nameRegex.test(value);
      },
      message: "Simple past must contain only alphabetic characters",
    },
  },
  pp: {
    type: String,
    required: [true, "Past perfect is required"],
    minLength: 2,
    maxLength: 40,
    trim: true,
    validate: {
      validator: function (value) {
        const nameRegex = /^[a-zA-Z]/;
        return nameRegex.test(value);
      },
      message: "Past perfect must contain only alphabetic characters",
    },
  },
});

module.exports = mongoose.model("norms", verbsSchema);
