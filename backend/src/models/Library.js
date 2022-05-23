import mongoose from "mongoose";

const librarySchema = mongoose.Schema({
  product: [
    {
      productId: {
        type: NUmber,
        unique: true,
      },
    },
  ],
  userID: {
    type: String,
    ref: "User",
  },
});

const Library = mongoose.model("Library", librarySchema);
export default Library;
