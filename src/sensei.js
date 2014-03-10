var Sensei = {
  romajiMaxLen: 5, // _.max(_.collect(_.keys(romajiTable), function(item) {return item.length}))
  kanjiMaxLen: 64 // _.max(_.collect(_.values(kanji), function(item) {return item.length}))
};

//Finds the kanji that could match to romaji string
// Romaji: english characters to convert
//
// returns: an array of kanji options
Sensei.kanji = function(romaji) {
  var kanjiResult = "", position = 0;
  
  while (position < romaji.length) {
    var len = this.kanjiMaxLen, found = false;

    if (romaji.length - position < len) {
      len = romaji.length - position;
    }

    while (len > 0 && !found) {
      romajiSubstring = romaji.substring(position, position + len);
      substringCandidate = kanji[romajiSubstring];

      if (substringCandidate != null) {
        kanjiResult += substringCandidate;
        position += len;
        found = true;
      }
      len--;
    }
    if (!found) {
      kanjiResult += romaji.charAt(position);
      position++;
    }
  }
  return kanjiResult.split('')
}


//Helper method to proxy the call to hiragana
// Romaji: english characters to convert
//
// returns: the string converted to hiragana
Sensei.hiragana = function(romaji) {
  return this.search(romaji).hiragana;
}

//Helper method to proxy the call to search
// Romaji: english characters to convert

// returns: the string converted to katakana
Sensei.katakana = function(romaji) {
  return this.search(romaji).katakana;
}

//Find the proper katakana or hiragana
// Romaji: english characters to convert
Sensei.search = function(romaji) {
  var position = 0, hiragana = '', katakana = '';
  while (position < romaji.length) {
    var len = this.romajiMaxLen, found = false;

    if (romaji.length - position < len) {
      len = romaji.length - position;
    }
    
    while (len > 0 && !found) {
      var romajiItem = romajiTable[romaji.substring(position, position + len)];
      if (romajiItem != null) {
        hiragana += romajiItem.hiragana
        katakana += romajiItem.katakana
        position += len;
        found = true;
      }
      len--;
    }
    if (!found) {
      hiragana += romaji.charAt(position);
      katakana += romaji.charAt(position);
      position++;
    }
  }
  if (hiragana != '' || katakana != '') {
    return {hiragana: hiragana, katakana: katakana};
  }
  return romaji;
}

// Convinence method to convert by passing an alphabet parameter
// Alphabet: either kanji, hiragana, katakana
// Romaji: english characters to convert
Sensei.convert = function (alphabet, romaji) {
  return this[alphabet](romaji);
}
