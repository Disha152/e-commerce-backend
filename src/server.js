const express = require('express');
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const uuid = require('uuid');

// const UserRoutes = require('./routes/user_routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());


const port = process.env.PORT || 8755;

mongoose.connect("mongodb+srv://disha29082001:project@clusternew.llrdeqz.mongodb.net/Ecommerce?retryWrites=true&w=majority");

const UserRoutes= require('./routes/user_routes');
app.use("/api/user",UserRoutes);

app.listen(port , ()=>{
  console.log(`Server is running on port ${port}`);
})
