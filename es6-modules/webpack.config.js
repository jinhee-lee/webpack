var path = require('path')

module.exports = {
    mode : 'none',
    entry : './js/app.js',
    output : {
        path : path.resolve(__dirname, 'build'),
        filename : 'main.bunde.js'
    }
}