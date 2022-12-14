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

app.get('/grafikbuku1', (req, res) => {
	res.render("grafikbuku1");
});

app.get('/grafikbuku2', (req, res) => {
	res.render("grafikbuku2");
});

app.get('/grafikbuku3', (req, res) => {
	res.render("grafikbuku3");
});

app.get('/grafikbuku4', (req, res) => {
	res.render("grafikbuku4");
});

app.get('/grafikbuku5', (req, res) => {
	res.render("grafikbuku5");
});

app.get('/searchbooks', (req, res) => {
	res.render("searchbooks");
});




app.listen(8080, () => {
	console.log("server ready!");
})