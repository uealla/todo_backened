import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

// create an instance of express server
const app = express ();

// create a variable for our port number
const PORT = process.env.PORT?? 5000;

app.get('/', (req, res) =>{
    res.send("Hello World");
});

mongoose.connect(process.env.MONGO_DB_CON_STRING, (error) => {
    if (error) {
       return console.log(`MongoDB failed to connect to the ${PORT}`);
    }
    else {
        console.log(`MongoDB is connected to the ${PORT}`);

        //start the server to listen to incoming request on the specific port
        app.listen(PORT, ()=> console.log(`Server is up and running on PORT: ${PORT}`)
        );
    }
});
