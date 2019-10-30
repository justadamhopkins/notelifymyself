const cardCtrl = require('../controllers/card')
const categoryCtrl = require('../controllers/category')

module.exports.routeList = (app) => {
  app.post('/api/addCard', cardCtrl.saveCard)
  app.post('/api/removeCard', cardCtrl.removeCard)
  app.get('/api/category/:id', cardCtrl.fetchCategory)
  app.post('/api/addCategory', categoryCtrl.addCategory)
}
