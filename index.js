const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Zugriff auf Umgebungsvariablen
const { PORT } = process.env;

// Initialisierung von expres
const app = express();
app.use(bodyParser.json());
// Use for development
app.use(cors());

// Datenbank Simulieren
const profiles = [
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

// Beispieluser
const userData = {
  firstName: "John",
  lastName: "Doe",
  address: "123 Main Street",
  hobbies: ["Reading", "Gardening", "Cooking"],
};

// Beispiel-Todos
const todosData = [
  { id: 1, task: "Buy groceries", completed: false },
  { id: 2, task: "Finish homework", completed: true },
];

// ToDo Abfrage
app.get("/todo", (req, res) => {
  const todoId = parseInt(req.query.todoId);

  const todoItem = todosData.find((item) => item.id === todoId);

  res.json({ todo: todoItem });
});

app.get("/todos", (req, res) => {
  res.json({ todos: todosData });
});

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/profile", (req, res) => {
  const userId = parseInt(req.query.userId);

  const userProfile = profiles.find((item) => item.id === userId);

  res.json({ profile: userProfile });
});

app.get("/profiles", (req, res) => {
  res.json({ profiles });
});

// GET-Route User
app.get("/user", (req, res) => {
  res.json(userData);
});

// GET-Route für Todos
app.get("/todos", (req, res) => {
  res.json(todosData);
});

// Post Request
app.post("/profile", (req, res) => {
  const newUser = req.body.user;

  profiles.push(newUser);

  res.json({ profile: "userProfile" });
});

// Put Request Username update
app.put("/profile/addusername", (req, res) => {
  const { username, userId } = req.body;

  const currentUser = profiles.find((item) => item.id === userId);
  currentUser.username = username;

  const deletedProfiles = profiles.filter((item) => item.id !== userId);
  deletedProfiles.push(currentUser);

  profiles = deletedProfiles;

  res.json({ updatedProfile: currentUser });
});

// Delete Request Username update
app.delete("/profile", (req, res) => {
  const { username, userId } = req.body;

  const deletedProfiles = profiles.filter((item) => item.id !== userId);
  profiles = deletedProfiles;

  res.json({ deleteedUserId: userId });
});

// Post Request ToDo
app.post("/todo", (req, res) => {
  const newTodo = req.body.todo;

  todosData.push(newTodo);

  res.json({ todo: newTodo });
});

// App hört im folgenden auf den Port, welcher über die Umgebungsvariable definiert ist
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
