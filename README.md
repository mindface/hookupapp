# hookupapp

electron-vueはnodeのバージョンとubuntuとの相性が悪く、通常のVuejsにvue-cli-plugin-electron-builderを利用しています。


検索補助アプリ

### 日本語 WordNet

http://compling.hss.ntu.edu.sg/wnja/

上記サイトのsqliteのDBベースをダウンロードして使います。

データを以下のフォルダに配置してください。

```
./middleware/aid/wnjpn.db
```

### app start

```
yarn install
```

```
yarn express # express起動
yarn serve # web
yarn electron:serve # electron
```
