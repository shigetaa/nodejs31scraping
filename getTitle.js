// Webサイトからタイトルを表示する
var TARGET_URL = "https://www.yahoo.co.jp/";

// CaperJSのオブジェクトを作成
var casper = require('casper').create();

// 指定のWebサイトを開く
casper.start(TARGET_URL, function () {
	this.echo(casper.getTitle());
});
// 処理を実行する
casper.run();
