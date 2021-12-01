import express from 'express';

// create an instance of express server
const app = express ();

// create a variable for our port number
const PORT = 5000;

app.get('/', (req, res) =>{
    res.send("Hello World");
});

//start the server to listen to incoming request on the specific port
app.listen(PORT, ()=> console.log(`Server is up and running on PORT: $(PORT)`)
);