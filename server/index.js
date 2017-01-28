import express from 'express';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../app/Routes';
import React from 'react';

const app = express();

const getPage = (reactContent) => {
	return `
<!DOCTYPE html>
<html>
	<head>
		<title>Paul Tela</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="/dist/bundle.css"/>
	</head>
	<body>
		<div id="root">${reactContent}</div>
		<script src="/dist/bundle.js" async></script>
	</body>
</html>
`;
};

app.use('/dist', express.static('dist'));

app.get('*', (req, res) => {
	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
		if (error) {
			res.status(500).send(error.message);
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (renderProps) {
			const content = getPage(renderToString(<RouterContext {...renderProps} />));
			res.status(200).send(content);
		} else {
			res.status(404).send('Not found');
		}
	});
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
});
