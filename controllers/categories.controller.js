import { Categories } from "../models/categories/categoriesModel.js";
import { findArticleByCategory } from "../queries/articles.query.js"
import { findAllCategories, findOneCategory } from "../queries/categories.query.js";

export const createCategories = async (req, res) => {
    Categories.create({
        name: req.body.name
    })
        .then(() => res.status(201).json({ message: "Catégorie enregistrée !" }))
        .catch(error => res.status(400).json({ message: "Erreur lors de la création de la catégorie." }))
};

export const getAllCategories = async (req, res) => {
    const categories = await findAllCategories();
    res.render("main/layout", { template: "auth/categories", categories })
};

export const getCategory = async (req, res) => {
    const { id } = req.params
    console.log("ID --->", id)
    const category = await findOneCategory(id);
    const articles = await findArticleByCategory(id)
    console.log("ARTCILE---->", articles)
    res.render("main/layout", { template: "auth/category", category, articles })
};

export const deleteCategories = async (req, res) => {
    const { id } = req.params
    console.log("ID --->", id)
    Categories.findByIdAndDelete(id).exec()
        .then(() => res.status(200).json({ message: "Catégorie supprimée avec succès" }))
        .catch(error => res.status(400).json({ error }))
};

export const modifyCategories = async (req, res) => {
    const { id } = req.params;
    console.log("ID -->", id)
    const categoriesObject = req.file ?
        {
            ...JSON.parse(req.body.categories),
        } : { ...req.body };
    Categories.findByIdAndUpdate(id, { ...categoriesObject, id: req.params._id }).exec()
        .then(() => res.status(200).json({ message: "Catégorie modifiée !" }))
        .catch(error => res.status(400).json({ error }))
};
