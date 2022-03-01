import pkg from "mongoose";
const {Schema, model} = pkg;

const choicesSchema = Schema(
    {
        label: {type: String, required: true},
        isCorrect: {type: Boolean, required: true}
    }
    
)



const quizzesSchema = Schema(
    {
        index: Number,
        question: {type: String, required: true},
        choices: [choicesSchema]

    },
    {timestamps: true}
);


choicesSchema.pre("save", async function () {
    const docCount = await Choices.countDocuments();
    return (this.index = docCount + 1);
})

quizzesSchema.pre("save", async function () {
    const docCount = await Quizzes.countDocuments();
    return (this.index = docCount + 1);
})

export const Choices = model("choices", choicesSchema);
export const Quizzes = model("quizzes", quizzesSchema);

