import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const ProductsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    modelNumber: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      default: "",
    },
    rating: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    features: {
      type: [String],
      default: [],
    },
    finishes: {
      type: [String],
      default: [],
    },
    brochure: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      required: true,
    },
    gallery: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

if (models && models.Product) {
  delete models.Product;
}

export default models?.Product || model("Product", ProductsSchema);
