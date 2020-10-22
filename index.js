const express = require('express');
const app = express();


//importing routes

const authRoute = require('./routes/auth');

//Route middleware
app.use('/api/user', authRoute); //everything in the auth route is going to have the prefix of /api/user => meaning that in auth.js the path '/register', is actually /api/user/register



app.listen(3000, () => console.log('Server running!'));
