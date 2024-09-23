const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const app = express();

const contactRoute = require('./routes/contact');
const aboutRoute = require('./routes/about');
const serviceRoute = require('./routes/service');



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);
app.use('/contact', contactRoute);
app.use('/about', aboutRoute);
app.use('/service',serviceRoute);

app.listen(2000, ()=> {
    console.log(`server running on http://localhost:2000`);
});