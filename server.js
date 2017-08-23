var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
    title: 'Article One | Ravikumar',
    heading: 'Article One',
    date: '23 Aug 2017',
    content:  `Article One HTML Page contents comes here. Article One HTML Page contents comes here. Article One HTML Page contents comes here. Article One HTML Page contents comes here. `
};

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
        <!doctype html>
    <html>
        <head>
            <link href="/ui/style.css" rel="stylesheet" />
            <title>${title}</title>
            <meta name="viewport" content = "width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="center">
                <img src="/ui/madi.png" class="img-medium"/>
            </div>
            <div> <a href = "/"> Home</a> </div>
           <div class="container">
            <hr>
                <h3>${heading}</h3>
                <div>${date}</div>
                <br>
                <div>
                    <p>${content}</p>
                </div>
            <hr>
            </div>
            <script type="text/javascript" src="/ui/main.js">
            </script>
        </body>
    </html>
    };
    return htmlTemplate;
}

app.get('/article-one', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
    res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
