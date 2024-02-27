# README

⚠️This is the City Watch Front end documentation ⚠️

# Front-end purpose, target audience and scope.

1. The targeted audience is members of any particular city that want to keep up with with alerts and events in their town. Users can log in, add content and comments, and view alerts in the area.

# Front-end architecture, including the main aspects of your application

2.

# Setup instructions to start the project.

3. Users will need to install angular version 17 and Node.js version 20.

# set of gems utilized in the project other than the default added gems

4. Gems that will need to be installled are the following:

   rack-cors-so that the backend can communicate with the frontend

   bcrypt-This gem was used to hash and securely store passwords.

   jwt-This helps authenticate and generate a token that will be stored for authorizaton.

   faker-This helps generate fake data for testing

   factory_bot_rail-This gem is used for creating and managing test data. It provides a convenient and flexible way to define and build model instances

# Testing

5. This API utilizes over 50 tests to ensure validity.

Models-Test were written to make sure usernames, passwords, emails, zipcodes are all present and unique and that test fail when this criteria isnt met. Passwords must be hashed and alerts and comments are all deleted when a user is destroyed.

requests-Test are written to return specified params, such as Bearer token and certain amount of content or deleted content. Session request test are written to verify successful http requests and logins.

# url to your Front end Project's repository

6. https://github.com/mik3ymikes/FE-City-Watch-Project
