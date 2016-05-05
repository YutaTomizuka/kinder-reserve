// server.js

// 必要なパッケージの読み込み
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// POSTでdataを受け取るための記述
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 3000番を指定
var port = process.env.PORT || 3000;

// expressでAPIサーバを使うための準備
var router = express.Router();

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});

// For Cross Origin
router.all( '/*', function ( req, res, next ) {
    res.contentType( 'json' );
    res.header( 'Access-Control-Allow-Origin', '*' );
    next();
} );

// 正しく実行出来るか左記にアクセスしてテストする (GET http://localhost:3000/api)
router.get('/test', function(req, res) {
    res.json([{
    date: "2016年05月03日",
    start: "15:00",
    end: "17:00",
    id: "0001",
    name: "富塚陽子ちゃん"
  }, {
    date: "2016年05月04日",
    start: "15:00",
    end: "17:00",
    id: "0002",
    name: "富塚陽太くん"
  }, {
    date: "2016年05月04日",
    start: "15:00",
    end: "17:00",
    id: "0003",
    name: "富塚祐太くん"
  }, {
    date: "2016年05月05日",
    start: "15:00",
    end: "17:00",
    id: "0002",
    name: "富塚たくまくん"
  }]);
});


// ルーティング登録
app.use('/api', router);

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);
