/**
 * Created by soundararajanvenkatasubramanian on 11/2/16.
 */
var express = require('express');
var favicon = require('serve-favicon');
const path = require('path')
var PORT = process.env.PORT || 3000;
// create our app

var app = express();
app.use(favicon(__dirname + '/public/images/icon.png'));
app.use(express.static('public'));


//, '/farcus/:farcus/', '/hoop(|la|lapoo|lul)/poo'
app.get(
    ['/', '/closeout', '/query', '/signin']
    , function (request, response){
   response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(PORT, function () {
   console.log(`Server is listening on port: ${PORT}`);
});
