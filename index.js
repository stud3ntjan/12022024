const express = require("express");
const cors = require("cors");

// Zugriff auf Umgebungsvariablen
const { PORT } = process.env;

// Initialisierung von expres
const app = express();
// Use for development
app.use(cors());

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

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/profile", (req, res) => {
  res.json({ profile: { name: "Max" } });
});

// GET-Route User
app.get("/user", (req, res) => {
  res.json(userData);
});

// GET-Route für Todos
app.get("/todos", (req, res) => {
  res.json(todosData);
});

// App hört im folgenden auf den Port, welcher über die Umgebungsvariable definiert ist
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
