const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
dotenv.config();
const cors = require('cors');


const app = express();

app.use(express.json());

app.use(
	cors({
		origin: '*',
	})
)

app.get('/', (req, res) => {
    // index.html
    res.sendFile('./index.html', { root: __dirname });
});


app.use('/api/feeds', require('./src/router/FeedRouter'));

const port = process.env.PORT || 8000;

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});
