import mongoose, { Schema, model, models } from "mongoose";

const ProductsSchema = new Schema(
    {
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        details: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default models.Product || model("Product", ProductsSchema);