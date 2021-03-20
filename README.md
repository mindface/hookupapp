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

イメージ図

<img width="1204" alt="スクリーンショット 2021-03-20 22 24 33" src="https://user-images.githubusercontent.com/37267958/111870996-4261bc80-89cb-11eb-9ab7-3cc201573342.png">

実行結果↓

<img width="1199" alt="スクリーンショット 2021-03-20 22 24 48" src="https://user-images.githubusercontent.com/37267958/111871009-51e10580-89cb-11eb-9a72-f7710f3c4dd1.png">



