import dbConnect from "../../../util/dbConnect";
import Todo from "../../../models/Todo";

export default async function handler(req, res) {
  await dbConnect();
  switch (req.method) {
    case "GET":
      const todos = await Todo.find();
      res.status(200).json(todos);
      break;

    default:
      res.status(405).json({ message: "this method is not allowed" });
      break;
  }
}
