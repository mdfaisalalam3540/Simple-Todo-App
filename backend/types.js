const zod = require("zod");

const createTodo = zod.object({
    title: zod.string().min(1, "Title is required"), // Ensure title is not empty
    description: zod.string().optional(), // Make description optional
});

const updateTodo = zod.object({
    id: zod.string(),
});

module.exports = {
    createTodo,
    updateTodo
};
