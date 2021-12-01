import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose  from "mongoose";  

import postRoutes from "./routes/posts.js";  

const app = express();

app.use('/posts', postRoutes);  

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());   

/* -------------------------- port and mongoose url ------------------------- */
const CONNECTION_URL = "mongodb+srv://sujin:1234@cluster0.2p1m8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

/* -------------------------- mongooose connection -------------------------- */
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`)))
    .catch((err) => console.log(err.message));

  