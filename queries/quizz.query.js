import { Quizzes } from "../models/quizzes/quizzesModel.js"

export const getQuizzById = (id) => {
    return Quizzes.findById(id).exec()
}

export const getAllQuizz = () => {
    return Quizzes.find().exec()
}