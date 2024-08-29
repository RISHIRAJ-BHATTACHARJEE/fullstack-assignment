import { Router } from "express";
import { createCard, getCards, getSingleCard } from "../controller/cardController.js";

const cardsRouter = Router();

cardsRouter.post("/", createCard)
cardsRouter.get("/", getCards)
cardsRouter.get("/:title", getSingleCard)

export default cardsRouter;