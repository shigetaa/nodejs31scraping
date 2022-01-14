# PhantomJS と CasperJS について

**PhantomJS**
> コマンドラインから使えるブラウザー

**CaperJS**
> PhantomJSを手軽に使うライブラリ

## PhantomJS と CasperJS のインストール

```bash
npm i -g phantomjs casperjs
```

無事にインストール出来たか確認の為以下のコマンドを入力して確認します

```bash
npm list -g phantomjs casperjs
```

```bash
C:\Users\user\AppData\Roaming\npm
├── casperjs@1.1.4
└── phantomjs@2.1.7+deprecated
```

## CaperJSサンプルプログラム

```javascript
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
```

```bash
casperjs getTitle.js
```

```bash
Yahoo! JAPAN
```

Windows の場合以下の様なエラーが表示される場合は下記のURLを参照してください。
https://noitalog.tokyo/pssecurity-exception/
```bash
デジタル署名されていません。このスクリプトは現在のシステムでは実行できません。
```

## 画面キャプチャを撮るプログラム

画面キャプチャを撮るプログラムを`screenshot.js`として作成します

```javascript
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

```
以下のコマンドを実行すると画面のスクリーンショットを`screenshot.png`と言うファイル名で保存されます

```bash
casperjs screenshot.js
```

## Filickr で検索結果を表示してみる

画像共有サイトFlickr を使って、公開されている猫の画像を検索し、その検索結果をスクリーンショットを保存するプログラムを`flickrShot.js`と言う名前で制作してみます

```javascript
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

```

以下のコマンドを実行すると画面のスクリーンショットを`screenshot.png`と言うファイル名で保存されます

```bash
casperjs flickrShot.js
```

## iPhone のふりをしてWebサイトを撮る

UserAgent を iPhone に設定した上でスクリーンショットを撮るプログラム`useragentshot.js`を作成します

```javascript
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

```

以下のコマンドを実行すると画面のスクリーンショットを`screenshot.png`と言うファイル名で保存されます

```bash
casperjs useragentshot.js
```

