import { Categories } from "../models/categories/categoriesModel.js";

export const createCategories = async (req, res) => {
    Categories.create({
        name: req.body.name
    })
    .then(() => res.status(201).json({ message: "Catégorie enregistré !"}))
    .catch(error => res.status(400).json({ message: "Erreur lors de la création de la catégorie !"}))
};

export const getAllCategories = async (req, res) => {
    Categories.find()
    .then(categories => res.status(200).json(categories))
    .catch(error => res.status(404).json({ error }))
};

export const getCategories = async (req, res) => {
    Categories.findOne({ where: { id: req.params._id }})
    .then(categorie => res.status(200).json(categorie))
    .catch(error => res.status(404).json({ error }))
};

export const deleteCategories = async (req, res) => {
    Categories.findOne({ where: { id: req.params._id}})
    Categories.deleteOne({ where: { id: req.params._id}})
    .then(() => res.status(200).json({ message: "Catégorie supprimé avec succès"}))
    .catch(error => res.status(400).json({ error }))
};

export const modifyCategories = async (req, res) => {
    const categoriesObject = req.file ?
    {
        ...JSON.parse(req.body.categories),
    } : { ...req.body };
    Categories.updateOne({where: { id: req.params._id}}, { ...categoriesObject, id: req.params._id})
    .then(() => res.status(200).json({ message : "Catégorie modifié !"}))
    .catch(error => res.status(400).json({ error })) 
};
