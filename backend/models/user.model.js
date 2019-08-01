import { Schema, Mongoose } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 6
    }
  },
  {
    timestamps: true
  }
);

const User = Mongoose.model("User", userSchema);

module.exports = User;
