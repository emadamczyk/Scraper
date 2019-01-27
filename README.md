# Scraper: All the Transportation News That's Fit to Scrape

### Overview

In this assignment, I set out to create a web app that lets users view and leave comments on the latest news stories. Employing Mongoose and Cheerio, the news articles are are scraped from another site, in this case Streetsblog --  `https://www.streetsblog.org/`.

###  Github & Heroku

This project is posted on my GitHub page: `https://github.com/emadamczyk/Scraper`

It uses the following npm packages:shed, install and save these npm packages:

   1. express

   2. express-handlebars

   3. mongoose

   4. cheerio

   5. axios

This project is also deployed to Heroku: `https://stormy-spire-59258.herokuapp.com/`

It uses mLab, which is a remote MongoDB database that Heroku supports natively. 

* How this app works:

  1. Whenever a user visits my scraper site, the app will scrape stories from a news outlet (in this case Streetsblog) and displays them for the user. Each scraped article gets saved to the application database. The app is set to scrape and display the following information for each article:

     * Headline - the title of the article

     * Summary - a short summary of the article

     * URL - the url to the original article


  2. Users are able to leave comments on the articles displayed and revisit them later. The comments get saved to the database as well and are associated with their respective articles. Users are also able to delete comments they left on articles. All stored comments will be visible to every user.


This app will not save any duplicate entries. The app retains stories and comments until users delete; this site is not simply refreshed and scraped with each visit. 

