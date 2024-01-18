"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _task = require("../controllers/task.controllers");
var router = (0, _express.Router)();
router.get("/", _task.renderTasks);
router.post("/tasks/add", _task.createTask);
router.get("/tasks/:id/toggleDone", _task.taskToggleDone);
router.get("/tasks/:id/edit", _task.renderTaksEdit);
router.post("/tasks/:id/edit", _task.editTask);
router.get("/tasks/:id/delete", _task.deleteTask);
var _default = exports["default"] = router;