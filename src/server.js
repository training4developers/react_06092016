import path from 'path';
import http from 'http';
import express from 'express';

export default function(config) {

	const app = express();
	const server = http.createServer(app);

	app.use('/libs', express.static(path.join(__dirname, '../node_modules')));
	app.use(express.static(config.webServer.folder));

	server.listen(config.webServer.port, () =>
		console.log(`web server running on port ${config.webServer.port}`));

}
