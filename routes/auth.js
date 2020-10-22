//making the auth routes

const { request } = require('express');

const router = require('express').Router();

router.post('/register', (request, response) => {
  response.send('Register!');
})

router.post('/login', (request, response) => {

})

module.exports = router;