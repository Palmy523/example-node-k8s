"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var count = 0;
app.get('/', function (req, res) {
    return res.json('Welcome to example-node-k8s-api');
});
/**
 * Adds 1 to the counter value
 */
app.post('/increment', function (req, res) {
    //TODO increment value
    count += 1;
    return res.json({ count: count });
});
/**
 * Reset the counter value
 */
app["delete"]('/increment', function (req, res) {
    // Reset increment value to 0
    count = 0;
    res.json();
});
/**
 * Get the counter value
 */
app.get('/increment', function (req, res) {
    // Get increment value
    console.log('APP GET /increment');
    return res.json({ count: count });
});
exports["default"] = app;
