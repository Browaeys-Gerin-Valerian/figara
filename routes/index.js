import express from 'express';

const MainRouter = express.Router();

MainRouter.get('/', (req, res, next) => {
    res.render('main/homepage', {});
    return;

})

MainRouter.get('*', (req, res, next) => {
    res.render('main/error', {
        error: '404 — La page que vous avez demandé n\'existe pas'
    });
    return;

})

export default MainRouter;
