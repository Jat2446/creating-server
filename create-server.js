const http = require('http')

http.createServer(function (request,response){
    response.write("jatin")
    response.end()
}).listen(4000)
