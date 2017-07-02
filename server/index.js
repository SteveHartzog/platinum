const express = require('express');
const morgan = require('morgan');

const apiRoutes = require('./api/index');
const app = express();

if (app.get('env') !== 'testing') {
  app.use(morgan('common')); //, { skip: function(req, res) { return res.statusCode < 400; }}));
}

app.use(express.static('client'));
app.use('/api/', apiRoutes)

let server;

function runServer() {
  const port = process.env.PORT || 8080;
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      if (app.get('env') !== 'testing') {
        console.log(`Your app is listening on port ${port}`);
      }
      resolve(server);
    }).on('error', err => {
      reject(err)
    });
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    if (app.get('env') !== 'testing') {    
      console.log('Closing server');
    }
    server.close(err => {
      if (err) {
        reject(err);
        // so we don't also call `resolve()`
        return;
      }
      resolve();
    });
  });
}

// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  runServer().catch((err) => {
    console.error(err)
  });
};

module.exports = {app, runServer, closeServer};