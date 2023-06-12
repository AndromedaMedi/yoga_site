const express = require('express'); 
const cors =  require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10); 
const jwtSecret = 'kjsdhfjshfkjhf';

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
})); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

mongoose.connect(process.env.MONGO_URL);


app.get('/test', (req, res) => {
    res.json('test ok');
});  

app.post('/register', async (req, res) => {
    const { name, email, password, number } = req.body;
    try {
        const newUser = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
            number
        });
        res.json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
        if (err.code === 11000) {
            res.status(422).json({ message: 'Email or number already exists' });
        } else if (err.errors) {
            const errors = Object.values(err.errors).map(error => error.message);
            res.status(422).json({ message: errors });
        } else {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userData = await User.findOne({ email }); 
        if (userData) {
            const passOk = bcrypt.compareSync(password, userData.password);

            if (passOk) {
                const token = jwt.sign({ 
                    name: userData.name, 
                    email: userData.email, 
                    id: userData._id 
                }, jwtSecret, {});
                res.cookie('token', token).status(200).json(userData);
            } else {
                res.status(401).json({ message: 'Invalid password' });
            }
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (token) {
      jwt.verify(token, jwtSecret, {}, (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: "Token verification failed" });
        }
        const user = { name: decoded.name, email: decoded.email, number: decoded.number, id: decoded.id };
        res.json({ user, token });
      });
    } else {
      res.json(null);
    }
  });
  


app.listen(3000);