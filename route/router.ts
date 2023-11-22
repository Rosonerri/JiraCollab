import { Router } from "express";
import { createTodo } from "../todoController";
const router: Router = Router();

router.route("/create-todo").post(createTodo);
export default router;
