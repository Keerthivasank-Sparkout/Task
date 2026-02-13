const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    let path = './docs/'

    if(req.url === '/'){
        console.log("//path");
        path+='home.html'
    }
    else if(req.url ==='/home'){
        res.statusCode=301;
        res.setHeader('Location','/')
        res.end()
    }
    else if(req.url === '/about'){
        console.log("/about/path");
        path+='about.html'
    }
    else if(req.url === '/contact'){
        console.log("/contact/path");
        path+='contact.html'
    }
    else{
        path+='error.html'
        res.statusCode=404;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err.message);
            res.end()
        }
        else{
            res.end(data);
        }
    })

})

server.listen(3000,'localhost',()=>{
    console.log("server is listening")
})