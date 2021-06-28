import {Router} from "express";
const router =  Router();

import {AuthController} from "./controllers/AuthController.js"

const authController = new AuthController()

router.get("/auth",authController.authenticate)
router.get("/posts",authController.show)
router.post("/posts",authController.create)

export { router };