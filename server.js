const http =  require('http')
const ser = http.createServer((req, res)=>{

    if(req.url=='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(`<h1> Welcome to the Dashboard </h1>`)
        res.end()
    }
    else if (req.url=='/about')
        {
            res.writeHead(200,{'content-type':'text/html'})
        res.write(`<h1> Welcome to the About Us Page </h1>`)
        res.end()
        }
        else if(req.url=='/Teams'){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(`<h1> Our Team </h1>`)
            res.end()
        }
        else if(req.url=='/Services'){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(`<h1> Services we provide </h1>`)
            res.end()
        }
        else if(req.url=='/Contact Us'){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(`<h1> Contact us for more </h1>`)
            res.end()
        }
        else if(req.url=='/Blogs'){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(`<h1> Our blogs </h1>`)
            res.end()
        }
    else{
        res.writeHead(400,{'content-type':'text/html'})
        res.end(`Page Not Found`)
    }
});


ser.listen(8000,()=>{
    console.log(`Listening at : localhost:8000`);
})