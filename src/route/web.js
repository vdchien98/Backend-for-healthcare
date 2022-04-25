import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    // cái ban đầu chưa MVC router.get('/', (req, res) => {
    //     return res.send('Hello World!');
    // });
    // Đã MVC
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);

    //Đang viết Rest API

    return app.use('/', router);
};

module.exports = initWebRoutes;
