const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

// Datenbank simulieren
let profiles = [
  {
    id: 1,
    firstName: "Max",
    name: "Mustermann",
    birthDate: new Date("1990-10-10"),
  },
  {
    id: 2,
    firstName: "Nina",
    name: "Mustermann",
    birthDate: new Date("1980-10-10"),
  },
];

const UserRouter = Router();

//  ***GET REQUESTS***
// Return profile from a specific user
UserRouter.get("/profile", (req, res) => {
  const userId = parseInt(req.query.userId);
  if (!userId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  const userProfile = profiles.find((item) => item.id === userId);
  if (!userProfile) {
    res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    return;
  }
  res.status(StatusCodes.OK).json({ profile: userProfile });
});

//  ***PUT REQUESTS***
UserRouter.put("/profile/update", (req, res) => {
  if (!currentUser) {
    res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    return;
  }

  currentUser.username = username;

  const deletedProfiles = profiles.filter((item) => item.id !== userId);
  deletedProfiles.push(currentUser);

  profiles = deletedProfiles;

  res.status(StatusCodes.OK).json({ updatedProfile: currentUser });
});

//  ***DELETE REQUESTS***
UserRouter.delete("/profile", (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }

  const deletedProfiles = profiles.filter((item) => item.id !== userId);
  profiles = deletedProfiles;

  res.status(StatusCodes.OK).json({ deletedUserId: userId });
});

module.exports = { UserRouter };
