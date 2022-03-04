import { Quizzes } from "../models/quizzes/quizzesModel.js";
import {findArticleByQuizz, getOneArticleById} from "../queries/articles.query.js"
import { getQuizzById, getAllQuizz } from "../queries/quizz.query.js";


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
    const {id} = req.params
    Quizzes.findByIdAndDelete(id).exec()
    .then(() => res.status(200).json({ message: "Quizz supprimé avec succès"}))
    .catch(error => res.status(400).json({ error }))
}

export const getAllQuizzes = async (req, res) => {
    const quizz = await getAllQuizz()
    res.render("main/layout", {template: "auth/quizz", quizz})
};

export const getQuizz = async (req, res) => {
    const {articleid, quizzid} = req.params

    const article = await getOneArticleById(articleid)

    const quizz = await getQuizzById(quizzid)
    res.render("main/layout", {template:"auth/quizz", article, quizz})


};

export const modifyQuizzes = async (req, res) => {
    const { id } = req.params;
    const quizzesObject = req.file ?
    {
        ...JSON.parse(req.body.quizzes),
    } : { ...req.body };
    Quizzes.findByIdAndUpdate(id, { ...quizzesObject, id: req.params._id}).exec()
    .then(() => res.status(200).json({ message : "Quizz modifié !"}))
    .catch(error => res.status(400).json({ error })) 
};


