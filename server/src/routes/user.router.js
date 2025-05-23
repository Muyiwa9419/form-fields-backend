// src/routes/user.router.js
import express from 'express';
import bcryptjs from 'bcryptjs'
import User from '../models/userSchema.js'; // <-- This is your Mongoose model

const router = express.Router();

router.post('/', async (req, res) => {
    console.log('Received data:', req.body)
  const { firstName, lastName, email, password } = req.body;
  

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const saltRounds = 10
    const hashedPassword = await bcryptjs.hash(password, saltRounds )
     const newUser = new User({ 
      firstName, 
      lastName, 
      email, 
      password: hashedPassword
    });
    
     await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
    console.log('user created successfully')

  } catch (error) {
    console.error('Error saving user:', error.message);
    res.status(500).json({ error: 'Server error' });
  }

});

export default router;
