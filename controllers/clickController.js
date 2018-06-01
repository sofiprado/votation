const homeController = require('./homeController.js')

let self = {}
const data = homeController.data
  self.update = function(req, res) {
    let likes = 0 
    for (var i = 0; i < data.length; i++) {

      if (data[i].id == req.body.id) {
        console.log(data[i])
        data[i]['likes'] = parseInt(data[i]['likes']) + 1
        console.log(data[i])
        likes = data[i]['likes']
      }
    }
    res.json({likes: likes})
   
}

module.exports = self;