require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Mi App Segura funciona'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
