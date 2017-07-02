const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../index');

const should = chai.should();

chai.use(chaiHttp);

describe('API', function() {
  // Before our tests run, we activate the server. Our `runServer`
  // function returns a promise, and we return the promise by
  // doing `return runServer`. If we didn't return a promise here,
  // there's a possibility of a race condition where our tests start
  // running before our server has started.
  before(function() {
    return runServer();
  });

  // Close server after these tests run in case
  // we have other test modules that need to 
  // call `runServer`. If server is already running,
  // `runServer` will error out.
  after(function() {
    return closeServer();
  });

  it('should be able to get all characters', function() {
    return chai.request(app)
      .get('/api/character')
      .then(function(res) {
        res.should.have.status(200);
      });
  });
  it('should be able to get the party', function() {
    return chai.request(app)
      .get('/api/party')
      .then(function(res) {
        res.should.have.status(200);
      }).catch(function (err) {
        throw err;
      });
  });
  it('should be able to load the game', function() {
    return chai.request(app)
      .get('/api/game')
      .then(function(res) {
        res.should.have.status(200);
      }).catch(function (err) {
        throw err;
      });
  });  
});