const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./database/connection');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) => {
    res.render('home');
});

app.get('/home',(req, res) => {
    res.render('home');
});

app.get('/grafik', (req, res) => {
	res.render("grafik");
});

app.get('/grafikbar', (req, res) => {
	res.render("grafikbar");
});
app.get('/searchbooks', (req, res) => {
	res.render("searchbooks");
});




app.listen(8080, () => {
	console.log("server ready!");
})