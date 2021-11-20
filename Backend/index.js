const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 8000;

const username = process.env.User;
const password = process.env.Password;

const connectDB = async (username,password) =>{
    const URL = `mongodb+srv://${username}:${password}@cluster-chatbox.ni62v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
        try {
            await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
            console.log('Database Connected Succesfully');
        } catch(error) {
            console.log('Error: ', error.message);
        }
}
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
connectDB(username,password);

const Routes = require('../Backend/routes/routes')
app.use('/', Routes);