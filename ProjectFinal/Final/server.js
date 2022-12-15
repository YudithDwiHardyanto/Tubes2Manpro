import path from 'path'
import express from 'express'
import mysql from 'mysql'
import bodyParser from 'body-parser'
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const pool = mysql.createPool({
    host: 'localhost',
	user: 'root',
	password: '',
	database: 'database_got',
    
});

const port = 8080;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const database = () => {
    return new Promise ((resolve, rejects) => {
        pool.getConnection((err, conn) => {
            if (err)
            {
               rejects(err);
            }
            else
            {
                resolve(conn);
            }
        })
    })
};

const Book1 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * FROM book1 LIMIT 10`, (err, result) => {
            if (err)
            {
                rejects(err);
            }
            else
            {
                resolve(result);
            }
        })
    })
}

const Book2 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * FROM book2 LIMIT 10`, (err, result) => {
            if (err)
            {
                rejects(err);
            }
            else
            {
                resolve(result);
            }
        })
    })
}


app.get('/tabelbuku2', async (req, res) => {
    const conn = await database();
    var book2 = await Book2(conn);
    conn.release();
    res.render('tabelbuku2',{
        book2
    });
});

app.get('/tabelbuku1', async (req, res) => {
    const conn = await database();
    var book1= await Book1(conn);
    conn.release();
    res.render('tabelbuku1',{
        book1
    });
});


app.get ('/home', async (req, res) => { 
    res.render('home');
});


app.get ('/grafik', async (req, res) => { 
    res.render('grafik');
});


app.get ('/grafikbar', async (req, res) => { 
    res.render('grafikbar');
});



app.get ('/searchbooks', async (req, res) => { 
    res.render('searchbooks');
});

app.get ('/grafikbuku1', async (req, res) => { 
    res.render('grafikbuku1');
});


app.get ('/grafikbuku2', async (req, res) => { 
    res.render('grafikbuku2');
});



app.get ('/grafikbuku3', async (req, res) => { 
    res.render('grafikbuku3');
});


app.get ('/grafikbuku4', async (req, res) => { 
    res.render('grafikbuku4');
});



app.get ('/grafikbuku5', async (req, res) => { 
    res.render('grafikbuku5');
});


app.listen (port, () => {
    console.log("Connected..")
});