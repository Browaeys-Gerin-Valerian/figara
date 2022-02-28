import pkg from "mongoose";
const {Schema, model} = pkg;

const articlesSchema = Schema(
    {
        index: Number,
        title: {type: String, required: true},
        content: {type: String, required: true},
        categories: [{type: Schema.Types.ObjectId, ref: "Categories"}],
        quizzes: [{type: Schema.Types.ObjectId, ref: "Quizzes"}],

    },
    {timestamps: true}
);

articlesSchema.pre("save", async function () {
    const docCount = await Articles.countDocuments();
    return (this.index = docCount + 1);
})

export const Articles = model("articles", articlesSchema);