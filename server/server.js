import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import requireDir  from 'require-dir';
import swig from 'swig';
import mongoose from 'mongoose';

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

global.app = express();

global.app.use(bodyParser.json());
global.app.use(bodyParser.urlencoded({ extended: false }));
global.app.use(allowCrossDomain);
global.app.use(cookieParser());

global.app.use('/jspm_packages', express.static(`${__dirname}/../jspm_packages`));
global.app.use('/client', express.static(`${__dirname}/../client`));
global.app.use('/assets', express.static(`${__dirname}/../assets`));

global.app.engine('html', swig.renderFile);
global.app.set('view engine', 'html');
global.app.set('views', path.join(__dirname, 'views'));

global.app.get('/', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../index.html`));
});

global.app.get('/config.js', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../config.js`));
});

const SERVER = global.app.listen(3000, () => {
    const HOST = SERVER.address().address;
    const PORT = SERVER.address().port;

    console.log(`Server listening at http://${HOST}:${PORT}`);
});