import { Router } from "express";
import { createTodo } from "../todoController";
const router: Router = Router();

router.route("/").post(createTodo);
export default router;
