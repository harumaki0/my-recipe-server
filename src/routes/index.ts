import express from "express";
import { getRecipes, getRecipePage, addRecipes } from "../query/recipe";
import { recipeRouter } from "./recipe";
import { userRouter } from "./user";

export const router = (app: express.Application) => {
  app.use("/recipe", recipeRouter);
  app.use("/user", userRouter);
};
