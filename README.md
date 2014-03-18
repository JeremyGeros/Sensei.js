Sensei.js
=========

Convert between the romaji and kanji/hirgana or katakana. Use these methods
```
Sensei.kanji('ki');
=> ["企", "伎", "危", "机", "気", "岐", "希", "忌", "汽", "奇", "祈", "季", "紀", "軌", "既", "記", "起", "飢", "鬼", "帰", "基", "寄", "規", "亀", "喜", "幾", "揮", "期", "棋", "貴", "棄", "毀", "旗", "器", "畿", "輝", "機", "騎", "己", "黄", "生", "木"]

Sensei.hiragana('ki');
=> "き"

Sensei.katakana('ki');
=> "キ"
```

Also includes a helper method to pass a string of the alphabet to be used
```
Sensei.convert('hiragana', 'ki');
=> "き"
```

Tests
=====
Run the mocha tests using grunt
```
grunt test

```
or use ```grunt watch``` to run the tests continuously

Dist
====
Use grunt 
