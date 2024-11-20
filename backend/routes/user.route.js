import express from "express";
import {
  getSearchResult,
  getUsersForSideBar,
} from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();
router.get("/", protectRoute, getUsersForSideBar);
router.get("/search", protectRoute, getSearchResult);

export default router;
