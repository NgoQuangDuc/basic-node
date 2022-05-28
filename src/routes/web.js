import express from "express";
import homePageController from'../controllers/homePageController'
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/",homePageController.Show);
    router.post("/create",homePageController.Create);
    router.get("/delete/:id",homePageController.Delete);
    router.get("/show/:id",homePageController.Shows);
    router.post("/update/:id",homePageController.Update);



    return app.use("/", router);
};
module.exports = initWebRoutes;
