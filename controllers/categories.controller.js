import { Categories } from "../models/categories/categoriesModel.js";

export const createCategories = async (req, res) => {
    Categories.create({
        name: req.body.name
    })
    .then(() => res.status(201).json({ message: "Catégorie enregistrée !"}))
    .catch(error => res.status(400).json({ message: "Erreur lors de la création de la catégorie."}))
};

export const getAllCategories = async (req, res) => {
    Categories.find()
    .then(categories => res.status(200).json(categories))
    .catch(error => res.status(404).json({ error }))
};

export const getCategories = async (req, res) => {
    const {id} = req.params
    console.log("ID --->", id)
    Categories.findById(id).exec()
    .then(categorie => res.status(200).json(categorie))
    .catch(error => res.status(404).json({ error }))
};

export const deleteCategories = async (req, res) => {
    const {id} = req.params
    console.log("ID --->", id)
    Categories.findByIdAndDelete(id).exec()
    .then(() => res.status(200).json({ message: "Catégorie supprimée avec succès"}))
    .catch(error => res.status(400).json({ error }))
};

export const modifyCategories = async (req, res) => {
    const {id} = req.params;
    console.log("ID -->", id)
    const categoriesObject = req.file ?
    {
        ...JSON.parse(req.body.categories),
    } : { ...req.body };
    Categories.findByIdAndUpdate(id, { ...categoriesObject, id: req.params._id}).exec()
    .then(() => res.status(200).json({ message : "Catégorie modifiée !"}))
    .catch(error => res.status(400).json({ error })) 
};
