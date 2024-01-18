"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _expressHandlebars = require("express-handlebars");
var _indexRoutes = _interopRequireDefault(require("./routes/index.routes.js"));
var _path = _interopRequireDefault(require("path"));
var _morgan = _interopRequireDefault(require("morgan"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.set("views", _path["default"].join(__dirname, "views"));

//Express-Handlebars
app.engine(".hbs", (0, _expressHandlebars.engine)({
  layoutDir: _path["default"].join(app.get("views"), "layouts"),
  partialsDir: _path["default"].join(app.get("views"), "partials"),
  defaultLayout: "main",
  extname: ".hbs"
}));
app.set("view engine", ".hbs");

//Middelwares
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
}));

//Routes
app.use(_indexRoutes["default"]);

//static files
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));
var _default = exports["default"] = app;