import express from "express";
import { logIn,signUpUser,logOut } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/signup",signUpUser)

router.get("/login",logIn)

router.get("/logout",logOut)


export default router;