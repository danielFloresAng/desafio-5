import { Router } from "express";

// import data from "../data.js";
// import

const router = Router();

router.get("/products", (req, res) => {
  const data = ["-"];
  res.render("products", { data: data });
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/profile", (req, res) => {
  res.render("profile");
});
router.get("/register", (req, res) => {
  res.render("register");
});

export default router;
