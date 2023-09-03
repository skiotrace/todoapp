import Todo from "../../../../models/Todo";
import dbConnect from "../../../../util/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  switch (req.method) {
    case "DELETE":
      console.log("passed");
      const { todoId } = req.query;
      console.log(req.query);
      try {
        await Todo.findByIdAndDelete(todoId);
        res.status(204).end();
      } catch (error) {
        console.log(error);
        res.status(404).json({ error: "Todo not found" });
      }
      break;

    default:
      res.status(405).json({ message: "this method is not allowed" });
      break;
  }
}
