"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var port = process.env.PORT || 8000;
app_1["default"].listen(port, function () {
    console.log("App listening on port " + port);
});
