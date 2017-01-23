const path = require('path');
const express = require('express');
const app = express();

app.use('/dist', express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
});
