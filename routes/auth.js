//making the auth routes

const router = require('express').Routers();

router.post('/register', (request, response) => {
  response.send('Register!');
})

module.exports = router;