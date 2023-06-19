# arludo-movies

Arludo take home challenge. Done in javascript
The backend is inside /server. I used React.js
The frontend is inside /client. I used Express.js

//////////////////////////

1. how to run backend in the terminal:

- go to the /server directory
- run "npm install" or "sudo npm install"
- run "npm run dev" or "sudo npm run dev"

2. how to run frontend in the terminal:

- go to the /client directory
- run "npm install" or "sudo npm install"
- run "npm start" or "sudo npm start"

3. the frontend will be avialable at this URL:
   http://localhost:3000/

////////////////////////////

functionalities:

- search function works
- can filter by theatre
- can filter by Rating
- displays session times
- displays title
- displays the rating
- displays the poster
- when the user clicks on the movie icon,
  the synopsis to the film is displayed as
  an alert. This is implemented through an
  external API call to OMDB
- the icons are responsive and change appearances
  depending on user interaction

//////////////////////

Reflection and future improvements:

- in the backend the data can be stored outside of json files
  through a database system such as MySQL or mongodb
- in the backend more API endpoints can be added in /routes
- the website is mostly functionl but there are some noticable bugs.
  this is largely due to the frontend code inside the async function
  not being properly syncronised.
- For scalability. The JSX in App.js can be further separated into
  smaller components. With information passed between parent and child
  through the use of props

///////////////////
