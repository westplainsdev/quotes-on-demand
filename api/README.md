# Quotes API

This is a simple Express / NodeJS powered API for web development purposes.

This application is CORS enabled, so all endpoints are open to public consumption. There is no security on the endponts.

The quotes api itself does support proper HTTP verb endpoints. You should be able to do the following actions:

## API

     /api/quote           | GET    | returns all quotes
     /api/quote/{id}      | GET    | returns a specific quote by 'id'
     /api/quote           | POST   | add a new quote
     /api/quote/{id}      | PUT    | update an quote
     /api/quote/{id}      | DELETE | deletes an quote

## Instructions

Run `npm install` to bring down all dependencies for the application.

Run `npm start` to start the server file.

Run `npm test` to run a simple program which cycles through all of the end points and console logs them out for you.
