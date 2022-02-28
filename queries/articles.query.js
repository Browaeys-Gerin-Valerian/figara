import {Articles} from "../models/articles/articles/arcticlesModels.js"


export const getAllArticles = () => {
    return Articles.find({}).exec();
};

export const getOneArticleById = (id) => {
    return Articles.findOne({id}).exec();
};



export const deleteArticleById = (id) => {
    return Articles.deleteOne({id}).exec()
};