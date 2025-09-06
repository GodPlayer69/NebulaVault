const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const db = new sqlite3.Database('./database/nebula.db', err => {
    if(err) console.error(err.message);
    else console.log('Connected to NebulaVault DB');
});

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
)`);

// Register
app.post('/register', async (req,res)=>{
    const { username, password } = req.body;
    try{
        const hash = await bcrypt.hash(password,10);
        db.run(`INSERT INTO users (username,password) VALUES (?,?)`, [username,hash], err=>{
            if(err) return res.json({message:'Username exists.'});
            res.json({message:'User registered!'});
        });
    } catch(err){ res.json({message:'Error.'}); }
});

// Login
app.post('/login', (req,res)=>{
    const {username,password} = req.body;
    db.get(`SELECT * FROM users WHERE username = ?`, [username], async (err,row)=>{
        if(err) return res.json({message:'Error.'});
        if(row && await bcrypt.compare(password,row.password)) return res.json({message:'Login successful!'});
        res.json({message:'Invalid username or password.'});
    });
});

// Users
app.get('/users', (req,res)=>{
    db.all(`SELECT id, username FROM users`, [], (err,rows)=>{
        if(err) return res.json({message:'Error fetching users.'});
        res.json(rows);
    });
});

app.listen(PORT, ()=>console.log(`Server running at http://localhost:${PORT}`));
