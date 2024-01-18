"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.MONGODB = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var MONGODB = exports.MONGODB = process.env.MONGODB || "mongodb://localhost/test";
var PORT = exports.PORT = process.env.PORT || 3000;