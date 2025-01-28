const express = require('express');
const app = express();
const port = 8000;

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5002',
}));

app.use(express.json());

app.get('/api/endpoint', (req, res) => {
    const data = {
        message: 'Привет с бэкенда!',
        success: true,
    };
    res.status(200).json(data);
});


app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});