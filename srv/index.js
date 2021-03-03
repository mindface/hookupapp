import express from 'express';
import socketIO from "socket.io";
import { WordSimilar } from "../middleware/wordwork";

const allowCrossDomain = function(req,res,next) {
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  )
  if('OPTIONS' === req.method){
    res.send(200)
  }else {
    next()
  }

}

export default (app, http) => {
  app.use(allowCrossDomain)
  app.use(express.json());
  
  app.get('/foo', (req, res) => {
    res.json({msg: 'foo'});
  });
  
  app.post('/foo', (req, response) => {
      const smilar_text = new WordSimilar(req.body.text)
        smilar_text.doing().then( res => {
          response.send(res)
        })
  });
  // optional support for socket.io
  // 
  let io = socketIO(http);
  io.on("connection", client => {
    client.on("message", function(data) {
    });
    client.emit("message", "Welcome");
  });
}
