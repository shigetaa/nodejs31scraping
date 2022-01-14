// Webサイトからスクリーンショットを撮る
var TARGET_URL = "https://testpage.jp/tool/ip_user_agent.php";

// CaperJSのオブジェクトを作成
var casper = require('casper').create();

// 指定のWebサイトを開く
casper.start();

// 画面サイズを指定する
casper.viewport(750, 1334);
// iPhone の UserAgent
casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53');

casper.open(TARGET_URL);

// その後、スクリーンショット撮影
casper.then(function () {
	this.capture("screenshot.png", {
		top: 0,
		left: 0,
		width: 750,
		height: 1334
	});
});

// 処理を実行する
casper.run();
