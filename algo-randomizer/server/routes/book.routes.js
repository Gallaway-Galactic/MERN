import { Router } from "express";
import BookController from "../controllers/book.controller.js";


const router = Router();

// All routes with the /books path
router.route("/books")
    .get(BookController.getAllBooks)
    .post(BookController.createBook);


// All routes with the /books/:id path
router.route("/books/:id")
    .get(BookController.getOneBook)
    .put(BookController.updateOneBook)
    .delete(BookController.deleteOneBook);


export default router;

