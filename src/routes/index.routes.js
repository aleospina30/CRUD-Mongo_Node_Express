import { Router } from "express";
import {
  createTask,
  deleteTask,
  editTask,
  renderTaksEdit,
  renderTasks,
  taskToggleDone,
} from "../controllers/task.controllers";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/toggleDone", taskToggleDone);

router.get("/tasks/:id/edit", renderTaksEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);


export default router;
