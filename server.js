const fs = require("fs");
const path = require("path");
const express = require("express");
const nunjucks = require("nunjucks");
const consolidate = require('consolidate');
const plantes = require( './src/plantes');
const bodyP = require('body-parser');
