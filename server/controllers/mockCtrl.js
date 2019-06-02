module.exports = {
  test(req, res) {
    console.log(req)
    const name = req.query.name || 'World'
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }))
  }
}
