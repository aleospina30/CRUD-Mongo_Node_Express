import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
    res.send("<h1>Hola Pispirispis</h1>");
  });

router.get("/about", (req, res) => {
    res.send("Estás en about Pispirispis");
  });

export default router;

