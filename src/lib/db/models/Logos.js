import mongoose, { Schema, model, models } from "mongoose";

const LogosSchema = new Schema(
    {
        logo: {
            type: String,
            required: true,
        },   
    },
    {
        timestamps: true,
    }
);

export default models.Logos || model("Logos", LogosSchema);