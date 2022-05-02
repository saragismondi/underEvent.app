const { Router } = require("express");
const { getAllEvent, postEvent, getByTitle, getIdDb, getByState } = require("../controllers/controllersClients");

const router = Router();

router.get("/getAll", getAllEvent);
router.post("/createEvent", postEvent);
router.get("/getTitle", getByTitle);
router.get("/getStates", getByState);
router.get("/:id", getIdDb);

module.exports = router;
