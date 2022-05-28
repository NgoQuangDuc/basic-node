require('dotenv').config();
import bodyParser from "body-parser";
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
import acd from "./services/homePageService"
let app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Config view engine
configViewEngine(app);

acd()
// init all web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () =>console.log(`Building a login system with NodeJS is running on port ${port}!`));
