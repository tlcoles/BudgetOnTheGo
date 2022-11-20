const { Schema, model } = require("mongoose");
// const dateFormat = require("../utils/dateFormat"); //! 21-MERN ex 26 dateFormat.js is example

const expenseSchema = new Schema(
  {
    item: {
      type: String,
      minlength: 1,
      maxlength: 25,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: (timestamp) => dateFormat(timestamp),
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

expenseSchema.virtual("formattedCreatedAt").get(function () {
  return new Date(this.createdAt);
});

const Expense = model("Expense", expenseSchema);

module.exports = Expense;
