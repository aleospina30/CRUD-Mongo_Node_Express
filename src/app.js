import express from "express";
import {engine} from 'express-handlebars';
import indexRoutes from "./routes/index.routes.js";
import path from 'path'

const app = express();


app.set('views', path.join(__dirname, 'views')); 

//Express-Handlebars
app.engine(".hbs", engine({
    layoutDir: path.join(app.get("views"),"layouts"),
    partialsDir: path.join(app.get("views"),"partials"),
    defaultLayout: "main",
    extname: ".hbs"
}))
app.set('view engine', '.hbs');

//Routes
app.use(indexRoutes);


export default app;