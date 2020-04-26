# NotesClassifier- 
## Team - Hakuna Matata

We meant to create a cross platform app which can categorize the documents and notes in folders.  
  
It tries to overcome the following problems we generally face with the documents and notes we get everyday:-  
* Not having all the documents related to a subject together.
* Not being able to find the documents you viewed recently hence we have to keep our recent docs always open.
* Planning of reading a doc at some time but forgeting it later.
It becomes a mess to find all the study material together especially when exams are going on and we tend to send the same docs again to our friend or someone so as to access it together and end end us having the same docs multiple times in our storage.  
  
So that's what out app aims to take a hit on.  
## Tech Stack -
* React native  - as we wanted to make an app which was cross-platform with a single code base and react native was the simplest one to start with as one should have the basic knowledge of js and reactjs.
* Various libraries like react native paper,vector icons, etc.
* Expo cli to begin with the project
* mongoDB for the database.
* ngrok to send request. It is valid only for 8 hrs and hence will need to migrate to Heroku before final Deployment.

### To run the project:-
* You should have npm packages and yarn packages globally installed on your system.
* Currently it runs on expo so install it:
```
npm install -g expo-cli
or 
yarn global add expo-cli
```
* initialise npm in the repository's main folder as well as servers folder.
```
npm init
```
* in the server folder also run the following commands for setup:
```
npm init
npm install express body-parser mongoose
install -g nodemon // for live reloading
npm install ngrok -g
```
* to run the app
```
cd NotesClassifier/NotesClassifier
npm start
cd server
ngrok http 3000
nodemon app
```

### TODO for the app before final deployment:-
* Build the app on Heroku instead.
* set up chat server with authentication.
* expo-eject (to build apk finally)
