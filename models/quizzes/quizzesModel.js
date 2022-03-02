import pkg from "mongoose";
const { Schema, model } = pkg;



const quizzesSchema = Schema(
  {
    index: Number,
    question: { type: String, required: true },
    C1: {label: {type: String, required: true}, isCorrect: {type: Boolean, required: true}},
    C2: {label: {type: String, required: true}, isCorrect: {type: Boolean, required: true}}, 
    C3: {label: {type: String}, isCorrect: {type: Boolean}},
    C4: {label: {type: String}, isCorrect: {type: Boolean}},
    C5: {label: {type: String}, isCorrect: {type: Boolean}},
  },
  { timestamps: true }
);



quizzesSchema.pre("save", async function () {
  const docCount = await Quizzes.countDocuments();
  return (this.index = docCount + 1);
});

export const Quizzes = model("quizzes", quizzesSchema);

