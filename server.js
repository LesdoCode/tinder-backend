import express from 'express';
import mongoose from 'mongoose';

//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:WfeqT2gXnBFyR33@cluster0.9wihv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


//Middleware


//DB config
mongoose.connect(connection_url, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}) //This is used because MongoDB is under constant evolution/ evolvation

//API endpoints
app.get('/', (req, res) => {
    res.status(200).send("Thank You Jesus");
})

//Listener
app.listen(port, () => {
    console.log(`listening on port ${port}...`)
});
