require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 8000;
const DB_URL = process.env.MONGO_URL; 

app.use(express.json()); 
app.use(cors()); 
app.use(express.urlencoded({ extended: true }));


const userRouter = require('./routes/users.js');

app.use('/users', userRouter);


async function main(){
    try{
        await mongoose.connect(DB_URL);
        console.log('Connected to DataBase');

        app.listen(PORT, () =>{
            console.log(`Server is listening on PORT ${PORT}`);
        });

    } catch(err){
        console.error("Error: ", err);
    }
}


app.get('/', (req, res) =>{
    res.send("Heyy! I'm Root");
});

main();