import mongoose from "mongoose";
const UserScehma = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    picturePath: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserScehma);
