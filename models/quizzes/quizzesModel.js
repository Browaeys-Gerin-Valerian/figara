import pkg from "mongoose";
const {Schema, model} = pkg;

const quizzesSchema = Schema(
    {
        index: Number,
        question: {type: String, required: true},
        choices: [{label: {type: String}, isCorrect: {type: Boolean}}]

    },
    {timestamps: true}
);

quizzesSchema.pre("save", async function () {
    const docCount = await Quizzes.countDocuments();
    return (this.index = docCount + 1);
})

export const Quizzes = model("quizzes", quizzesSchema);