const express = require('express');
const app = express();
// middleware wont allow you to go ahead unless and until thet piece of code gets satisfied.
const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide your age")
    }
    else if (req.query.age<18) {
        resp.send("You are under aged")
    }
    else {
        next();
    }
}
// For a praticular user use req filter in that particular router.
// app.use(reqFilter);

app.get('/', (res, resp) => {
    resp.send('Welcome to Home page')
});
app.get('/user',reqFilter, (res, resp) => {
    resp.send('Welcome to Users page')
});
app.get('/about', (res, resp) => {
    resp.send('Welcome to About page')
});
// Error Handling
app.get('/error',(res,req)=>{
    throw new Error('Broken');
})
app.get('/error2', (req, res, next) => {
    fs.readFile('/file-does-not-exist', (err, data) => {
      if (err) {
        next(err) // Pass errors to Express.
      } else {
        res.send(data)
      }
    })
  })
//Gloabl error handler
// app.all('*',(resp,req,next)=>{
//     const err = new Error('Cant find data on server')
//     error.status='fail'
//     error.statuscode=404

//     next(err);
// })
// app.use((error,req,res,next)=>{
//     error.statusCode= error.statusCode || 500;
//     error.status = error.statuscode || 'error'
//     res.status(error.statuscode).json({
//         status:error.statusCode,
//         message: error.message
//     })
// });
app.listen(5000)