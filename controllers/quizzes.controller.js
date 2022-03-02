import { Quizzes } from "../models/quizzes/quizzesModel.js";

export const createQuizzes = async (req, res) => {
    
    // occurence = 0;
    // if ( req.body.C1.isCorrect == true) {
    //     occurence += 1
    // } else if ( req.body.C2.isCorrect == true ) {
    //     occurence += 1
    // } else if ( req.body.C3.isCorrect == true ) {
    //     occurence += 1
    // } else if (req.body.C4.isCorrect == true) {
    //     occurence += 1
    // } else if ( req.body.C5.isCorrect == true ) {
    //     occurence += 1
    // }

    

    Quizzes.create({
        question: req.body.question,
        C1: req.body.C1,
        C2: req.body.C2
    })
    .then(() => res.status(201).json({ message: "Quizz enregistré !"}))
    .catch( error => res.status(400).json({ message: "Erreur lors de la création"}))
};

export const deleteQuizz = async (req, res) => {
    Quizzes.findOne({ where: { id: req.params._id}})
    Quizzes.deleteOne({ where: { id: req.params._id}})
    .then(() => res.status(200).json({ message: "Quizz supprimé avec succès"}))
    .catch(error => res.status(400).json({ error }))
}

export const getAllQuizzes = async (req, res) => {
    Quizzes.find()
    .then(quizzes => res.status(200).json(quizzes))
    .catch(error => res.status(404).json({ error }))
};

export const getQuizz = async (req, res) => {
    Quizzes.findOne({ where: { id: req.params._id }})
    .then(quizz => res.status(200).json(quizz))
    .catch(error => res.status(404).json({ error }))
};

export const modifyQuizzes = async (req, res) => {
    const quizzesObject = req.file ?
    {
        ...JSON.parse(req.body.quizzes),
    } : { ...req.body };
    Quizzes.updateOne({where: { id: req.params._id}}, { ...quizzesObject, id: req.params._id})
    .then(() => res.status(200).json({ message : "Quizz modifié !"}))
    .catch(error => res.status(400).json({ error })) 
};


