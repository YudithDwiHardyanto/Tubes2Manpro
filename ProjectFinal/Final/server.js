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

const Books = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * FROM books`, (err, result) => {
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

const Book1 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * FROM book1 WHERE Book = 1`, (err, result) => {
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
        conn.query(`SELECT * FROM book2 WHERE Book = 2`, (err, result) => {
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

const Book3 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * FROM book3 WHERE Book = 3`, (err, result) => {
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

const Book4 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * FROM book4 WHERE Book = 4`, (err, result) => {
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

const Book5 = (conn) => {
    return new Promise ((resolve, rejects) => {
        conn.query(`SELECT * FROM book5 WHERE Book = 5`, (err, result) => {
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

app.get('/caribuku', async (req, res) => {
    const conn = await database();
    var books = await Books(conn);
    conn.release();
    res.render('caribuku',{
        books
    });
});

app.get('/tabelbuku1', async (req, res) => {
    const conn = await database();
    var book1 = await Book1(conn);
    conn.release();
    res.render('tabelbuku1',{
        book1
    });
});

app.get('/tabelbuku2', async (req, res) => {
    const conn = await database();
    var book2 = await Book2(conn);
    conn.release();
    res.render('tabelbuku2',{
        book2
    });
});



app.get('/tabelbuku3', async (req, res) => {
    const conn = await database();
    var book3= await Book3(conn);
    conn.release();
    res.render('tabelbuku3',{
        book3
    });
});

app.get('/tabelbuku4', async (req, res) => {
    const conn = await database();
    var book4= await Book4(conn);
    conn.release();
    res.render('tabelbuku4',{
        book4
    });
});

app.get('/tabelbuku5', async (req, res) => {
    const conn = await database();
    var book5= await Book5(conn);
    conn.release();
    res.render('tabelbuku5',{
        book5
    });
});

app.get ('/undirectedgraph1', async (req, res) => { 
    res.render('undirectedgraph1');
});

app.get ('/undirectedgraph2', async (req, res) => { 
    res.render('undirectedgraph2');
});

app.get ('/undirectedgraph3', async (req, res) => { 
    res.render('undirectedgraph3');
});
app.get ('/undirectedgraph4', async (req, res) => { 
    res.render('undirectedgraph4');
});
app.get ('/undirectedgraph5', async (req, res) => { 
    res.render('undirectedgraph5');
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