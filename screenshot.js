// Webサイトからスクリーンショットを撮る
var TARGET_URL = "https://www.yahoo.co.jp/";

// CaperJSのオブジェクトを作成
var casper = require('casper').create();

// 指定のWebサイトを開く
casper.start();
casper.open(TARGET_URL);

// その後、スクリーンショット撮影
casper.then(function () {
	casper.capture("screenshot.png");
});

// 処理を実行する
casper.run();
