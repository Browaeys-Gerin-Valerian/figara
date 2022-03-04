import pkg from "mongoose";
const { Schema, model } = pkg;

const categoriesSchema = Schema(
    {
        index: Number,
        name: { type: String, required: true },
    },
    { timestamps: true }
);

categoriesSchema.pre("save", async function () {
    const docCount = await Categories.countDocuments();
    return (this.index = docCount + 1);
})

export const Categories = model("categories", categoriesSchema);