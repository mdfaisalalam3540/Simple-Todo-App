const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Create a todo
app.post("/todos", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    return res.status(400).json({
      msg: "You sent the wrong inputs",
    });
  }

  // Insert the todo into the database
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  });

  res.json({
    msg: "Todo created"
  });
});

// Fetch all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await todo.find({});
    res.json({
      todos
    });
  } catch (error) {
    res.status(500).json({ msg: "Error fetching todos" });
  }
});

// Update a todo's completion status
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    return res.status(400).json({
      msg: "Update Failed!"
    });
  }

  await todo.updateOne({
    _id: req.body.id
  }, {
    completed: true
  });

  res.json({
    msg: "Todo marked as completed"
  });
});

// Change the port to 5001
app.listen(5001, () => {
  console.log("Server is running on Port 5001");
});
