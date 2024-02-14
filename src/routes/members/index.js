const { Router } = require("express");
const { StatusCodes } = require("http-status-codes");

const MembersRouter = Router();

MembersRouter.post("/memadd", (req, res) => {
  res.status(StatusCodes.CREATED).send("Member erfolgreich hinzugefügt");
});

MembersRouter.delete("/memremove", (req, res) => {
  res.status(StatusCodes.NO_CONTENT).send();
});

MembersRouter.get("/memlist", (req, res) => {
  res.status(StatusCodes.OK).send("Liste aller Member");
});

module.exports = { MembersRouter };
