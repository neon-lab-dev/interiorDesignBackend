const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  keyFeatures: {
    type: String,
    required: [true, "Please Enter keyFeatures"],
  },
  specification: {
    type: String,
    required: [true, "Please Enter product specification"],
  },
  sizes: [
    {
      side: {
        type: String,
      },
      size: {
        type: String,
      },
      basePrice: {
        type: Number
      },
      discountedPercent: {
        type: Number
      },
      stock: {
        type: Number
      }
    }
  ],
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      fileId: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      url: {
        type: String,
        required: true,
      },
      thumbnailUrl: {
        type: String,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  sub_category: {
    type: String,
    required: [true, "Please Enter Product SubCategory"],
  },
  sub_category2: {
    type: String,
    default: "", // Optional: Set a default value if needed
  },
  color: {
    type: String,
  },
  Availablecolor: {
    type: String,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

}, {
  timestamps: true,
});

module.exports = mongoose.model("Product", productSchema);
