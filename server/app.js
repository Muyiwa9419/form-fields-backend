import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/database.js';
import userRouter from './src/routes/user.router.js';



//initialize express
const app = express();
dotenv.config();
//initialize environment variables
const PORT = process.env.PORT || 5000

//initialize middleware
app.use(express.json());
app.use(cors())


 //routes
app.use('/api/users', userRouter)



//connect database
connectDB()



//root
app.get('/', (req, res) =>{
    console.log('Loaded!!!')
    res.send('Application is running')
    
})




app.listen(PORT, (req, res) =>{
    console.log(`Server is running on ${PORT}`)
})