const express = require('express');
const app = express();
const { Pool } = require('pg');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const PORT = 8000;
const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'postgres',
    password: 'cherrymycat',
    port: "5432",
});

app.use(cors({
    origin: 'http://localhost:5002',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await pool.query(
            'SELECT EXISTS(SELECT 1 FROM "user" WHERE email = $1)',
            [email]
        );

        if (existingUser.rows[0].exists) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const result = await pool.query(
            'INSERT INTO "user" (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, hashedPassword]
        );
        res.status(201).json({
            message: 'User added successfully',
            user: result.rows[0],
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding user', error });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {

        const userResult = await pool.query(
            'SELECT * FROM "user" WHERE email = $1',
            [email]
        );


        if (userResult.rows.length === 0) {
            return res.status(400).json({ message: 'No user found with this email. Please sign up.' });
        }

        const user = userResult.rows[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        res.json({ message: 'Login successful', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error logging in', error });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, name, email FROM "user"');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Error retrieving users', error });
    }
});