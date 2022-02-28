const express = require("express");
const { app } = require("../app");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));