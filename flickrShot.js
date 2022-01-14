// Webサイトからスクリーンショットを撮る
var TARGET_URL = "https://www.flickr.com/";

// CaperJSのオブジェクトを作成
var casper = require('casper').create();

// 指定のWebサイトを開く
casper.start();

// 画面サイズを指定する
casper.viewport(1024, 800);

casper.open(TARGET_URL);

// 検索フォームに猫を設定
casper.then(function () {
	this.fill("form[role='search']", { text: "ネコ" }, true);
});

// その後、スクリーンショット撮影
casper.then(function () {
	this.capture("screenshot.png", {
		top: 0,
		left: 0,
		width: 1024,
		height: 800
	});
});

// 処理を実行する
casper.run();
