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

