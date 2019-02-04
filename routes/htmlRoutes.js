const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");
const moment = require("moment"); //install moment??
const path = require('path');

module.exports = function(app) {
  // Load index page
 
    
  
  //load page for scraped sites -- necessary?
  //app.get("/scrape", function(req, res) {
      //axios call
    
  //load page of saved articles 
//   app.get("/saved", function(req, res) {
//     res.render("saved");
//   });

  //load error page
  app.get("*", function(req, res) {
    res.render("404");
  });
};