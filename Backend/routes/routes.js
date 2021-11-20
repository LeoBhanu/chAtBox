const express = require('express')

const route = express.Router();

const {addUser,getUser } = require('../Controllers/user-controller')
const { newConversation, getConversation } = require('../Controllers/conversation-controller') ;
const { newMessage, getMessage } = require('../Controllers/message-controller')


route.post('/add', addUser);
route.get('/users', getUser);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessage);


module.exports = route;