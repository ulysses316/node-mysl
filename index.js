const app = require('./config/server');
require('./app/routes/routes')(app);  

app.listen(app.get('port'), () =>{
  console.log("Server on PORT: ", app.get("port"));
})
