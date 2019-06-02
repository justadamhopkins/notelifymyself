const mockCtrl = require('../controllers/mockCtrl')

module.exports.routeList = (app) => {
  app.get('/api', mockCtrl.test)
}
