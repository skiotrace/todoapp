import Todo from "../../../../models/Todo";
import dbConnect from "../../../../util/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  switch (req.method) {
    case "POST":
      const { text } = req.body;
      console.log(req.body);
      if (!text) {
        res.status(400).json({ error: "Text field is required" });
        return;
      }
      const newTodo = await Todo.create({ text, completed: false });
      res.status(201).json(newTodo, { message: "its working" });
      console.log(text);
      break;
    case "GET":
      const todos = await Todo.find();
      res.status(200).json(todos);
      break;

    default:
      res.status(405).json({ message: "this method is not allowed" });
      break;
  }
}
