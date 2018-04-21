const express = require('express');
const app = express();
const PORT = 8081;

app.get('/', (req, res) => {
	res.json({ message: 'Hello Dieter!' });
});

app.listen(PORT, () => console.log('Listening on port ' + PORT + '.'));
