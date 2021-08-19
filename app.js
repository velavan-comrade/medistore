const express=require('express')
const app=express()

const bodypraser=require('body-parser');
const mongoose=require('mongoose')
const session=require('express-session')
const productRoutes=require('./route/product.js');
const customerRoute=require('./route/customer.js');

mongoose.connect('mongodb://localhost/medi', {useNewUrlParser: true,  useUnifiedTopology: true });
var db=mongoose.connection;

db.on('error',console.error.bind(console,'MongoDB connection error:'));

console.log('databases created');

app.use(bodypraser.urlencoded({extended:false}));
app.use(bodypraser.json()); 
app.use(session({
    secret:'secret-key',
    resave: true,
    saveUninitialized: true,
      
}));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
        return res.status(200).json({});
    }
    next();
})

app.use('/product',productRoutes);
app.use('/customer',customerRoute);

app.use((req, res, next) => {
    console.log(next)
    const error = new Error("requesting API not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({
            error: {
                message: error.message
            }
        })
});

module.exports=app