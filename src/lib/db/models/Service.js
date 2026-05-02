import mongoose, { Schema, model, models } from "mongoose";

const ServiceSchema = new Schema(
    {
        image: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        features: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

export default models.Service || model("Service", ServiceSchema);