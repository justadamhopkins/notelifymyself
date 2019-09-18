const cardCtrl = require('../controllers/card')

module.exports.routeList = (app) => {
  app.post('/api/addCard', cardCtrl.saveCard)
}
