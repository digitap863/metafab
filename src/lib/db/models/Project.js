import mongoose, { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
    {
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default models.Project || model("Project", ProjectSchema);