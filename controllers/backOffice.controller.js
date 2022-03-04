import { deleteArticleById, createNewArticle } from "../queries/articles.query.js"
import { findAllCategories } from "../queries/categories.query.js";
import { getAllArticles } from "../queries/articles.query.js";
import { getAllQuizz } from "../queries/quizz.query.js";

export const homepageBackOffice = async (req, res) => {
    const categories = await findAllCategories()
    res.render("auth__back-office/layout", { template: "homepage", categories })
}

export const articleBackOffice = async (req, res) => {
    try {
        const articles = await getAllArticles();
        res.render("auth__back-office/layout", { template: "articles/articlesList", articles });
    } catch (error) { }
}

export const categoriesBackOffice = async (req, res) => {
    try {
        const categories = await findAllCategories();
        res.render("auth__back-office/layout", { template: "categories/categoriesList", categories });
    } catch (error) { }
}

export const quizzesBackOffice = async (req, res) => {
    try {
        const quizzes = await getAllQuizz();
        res.render("auth__back-office/layout", { template: "quizzes/quizzesList", quizzes })
    } catch (error) { }
}

export const articleDeleteBackOffice = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteArticle = await deleteArticleById(id);
        res.redirect("/admin/articles")
    } catch (error) { }
};


export const newArticle = async (req, res) => {
    if (req.method === "GET") {
        const categories = await findAllCategories();
        const quizzes = await getAllQuizz()
        res.render("auth__back-office/layout", { template: "articles/addArticle", categories, quizzes });
    }
    if (req.method === "POST") {
        const { body } = req;
        console.log("BODY----->", body);
        try {
            // const newArticle = await createNewArticle(body);
            // res.redirect("/admin/articles")
        } catch (error) { }
    }
};
