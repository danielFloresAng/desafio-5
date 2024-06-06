import { Router } from "express";
import config from "../config.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const test = "es un test, loco";
    res.status(200).send({ origin: config.SERVER, playload: test });
  } catch (error) {
    res.status(500).send({ origin: config.SERVER, playload: message.error });
  }
});
router.post("/login", async (req, res) => {
  try {

    
    const test = "es un test, loco";
    res.status(200).send({ origin: config.SERVER, playload: test });
  } catch (error) {
    res.status(500).send({ origin: config.SERVER, playload: message.error });
  }
});
router.post("/", async (req, res) => {
  try {
    const test = "es un test, loco";
    res.status(200).send({ origin: config.SERVER, playload: test });
  } catch (error) {
    res.status(500).send({ origin: config.SERVER, playload: message.error });
  }
});
router.put("/", async (req, res) => {
  try {
    const test = "es un test, loco";
    res.status(200).send({ origin: config.SERVER, playload: test });
  } catch (error) {
    res.status(500).send({ origin: config.SERVER, playload: message.error });
  }
});
router.delete("/", async (req, res) => {
  try {
    const test = "es un test, loco";
    res.status(200).send({ origin: config.SERVER, playload: test });
  } catch (error) {
    res.status(500).send({ origin: config.SERVER, playload: message.error });
  }
});

export default router;
