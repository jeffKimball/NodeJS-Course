const http = require('http')

const server = http.createServer((req, res) =>{
    const url = req.url
    const method = req.method

    if(url === '/'){
        res.write("<html>")
        res.write("<head><title>Welcome Page</title></head>")
        res.write("<body>")
        res.write("<h3>Welcome to My Node JS Assignment</h3>")
        res.write("<form action='/create-user' method='POST'>")
        res.write("<input name='username'><button type='submit'>send</button>")
        res.write("</form>")
        res.write("</body>")
        res.write("</html>")
        return res.end()
    }
    if(url === '/user'){
        res.write("<html>")
        res.write("<head><title>User Page</title></head>")
        res.write("<body><ul><li>user 1</li><li>user 2</li></ul></body>")
        res.write("</html>")
        return res.end()
    }
    if(url === '/create-user' && method === 'POST'){
        const body = []
        req.on('data', chunk =>{
            body.push(chunk)
        })
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody.split("=")[1])
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        res.end()
    }
})

server.listen(3000)