var express = require('express'),
    httpProxy = require('http-proxy'),
    path = require('path'),
    bunyan = require('bunyan'),
    fs = require('fs');
var logger = bunyan.createLogger({name: "myapp"});

var args = require('minimist')(process.argv.slice(2));

checkCommandlineParameters();

if (args.mode === 'prod') {
    logger.info('Running in production mode and proxying: ' + args.proxy.host + ':' + args.proxy.port);
} else if (args.mode === 'mock') {
    logger.info('Running in mock mode and serving mocked data. If this happens in production it is not good ;)');
}

var proxy = httpProxy.createProxyServer({});
var app = express();

app.use(express.static(path.join(__dirname, '..', 'public', 'build')));

app.route('/api/*$').all(function (req, res) { // proxy all requests
    if (args.mode === 'prod') {
        handleApiRequestInProductionMode(req, res);
    } else if (args.mode === 'mock') {
        handleApiRequestInMockedMode(req, res);
    }
});
app.listen(args.port);

function checkCommandlineParameters() {
    if(!args.port) {
        logger.fatal('I need a port to run on');
        process.exit(1);
    }
    if (!args.mode) {
        logger.fatal('I need a mode (specify with --mode=)');
        process.exit(1);
    } else if (!(args.mode === 'mock' || args.mode === 'prod')) {
        logger.fatal('Mode needs to be mock or prod');
        process.exit(1);
    } else if (args.mode === 'prod' && (!args.proxy || !args.proxy.host || !args.proxy.port)) {
        logger.fatal('Production mode needs an host and a port (specify with --proxy.host= and --proxy.port=)');
        process.exit(1);
    }
}

function handleApiRequestInProductionMode(req, res) {
    proxy.web(req, res, {target: {host: args.proxy.host, port: args.proxy.port}}, function (e, req, res) {
        logger.error('Proxy error' + e);
        res.json({'message': 'proxy error'});
    });
}

function handleApiRequestInMockedMode(req, res) {
    var mockedFilePath = path.join(__dirname, 'mocked_data', req.path.substring(1))+ '_' +req.method+'.json';
    logger.info(req.method);
    fs.stat(mockedFilePath, function(err, stat) {
        if (err || !stat.isFile()) {
            logger.error('Trying to call an invalid path for mock: ' + req.path + ' with method ' + req.method);
            res.status(404).json({message: 'not a valid path for mocked server'});
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'});
            fs.createReadStream(mockedFilePath).pipe(res);
        }
    });
}