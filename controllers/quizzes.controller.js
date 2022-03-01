import { Quizzes } from "../models/quizzes/quizzesModel.js";

export const createQuizzes = async (req, res) => {
    Quizzes.create({
        question: req.body.question,
        choices: req.body.choices
    })
    .then(() => res.status(201).json({ message: "Quizz enregistré !"}))
    .catch( error => res.status(400).json({ message: "Erreur lors de la création"}))
};