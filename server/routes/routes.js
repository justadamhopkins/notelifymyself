const cardCtrl = require('../controllers/card')
const categoryCtrl = require('../controllers/category')

module.exports.routeList = (app) => {
  app.post('/api/cards/add', cardCtrl.saveCard)
  app.post('/api/cards/remove', cardCtrl.removeCard)
  app.get('/api/category/:id', cardCtrl.fetchCategory)
  app.post('/api/category', categoryCtrl.addCategory)
}
