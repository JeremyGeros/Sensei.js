var Sensei = {
  romajiMaxLen: 5, // _.max(_.collect(_.keys(romajitable), function(item) {return item.length}))
  kanjiMaxLen: 64 // _.max(_.collect(_.values(kanji), function(item) {return item.length}))
};

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
        if (substringCandidate.length > 1) {
          // many choices, use first set of choices found (longest matching romaji)
          found = true;
          kanjiResult += romajiSubstring;
          position += len;
        } else {
          kanjiResult += substringCandidate;
          position += len;
          found = true;
        }
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

Sensei.hiragana = function(romaji) {
  return this.search(romaji).hiragana;
}

Sensei.katakana = function(romaji) {
  return this.search(romaji).katakana;
}

Sensei.search = function(romaji) {
  var position = 0, hiragana = '', katakana = '';
  while (position < romaji.length) {
    var len = this.romajiMaxLen, found = false;

    if (romaji.length - position < len) {
      len = romaji.length - position;
    }
    
    while (len > 0 && !found) {
      var romajiItem = romajitable[romaji.substring(position, position + len)];
      if (romajiItem != null) {
        hiragana += romajiItem.hiragana
        katakana += romajiItem.katakana
        position += len;
        found = true;
      }
      len--;
    }
    if (!found) {
      hiragana += romaji.charAt(pos);
      katakana += romaji.charAt(pos);
      pos++;
    }
  }
  if (hiragana != '' || katakana != '') {
    return {hiragana: hiragana, katakana: katakana};
  }
  return romaji;
}

//   function populate_kanji_panel(romaji_to_display) {
//     $(".kanji_panel_romaji").html(romaji_to_display);
//     $(".kanji_panel").show();
//     $(".kanji_panel").html("");
//     choices = kanji[romaji_to_display].split('');
//     html = "";
//     for (i = 0; i < choices.length; i++) {
//       html += "<div class='option'>" + choices[i] + "</div>";
//     }
//     $(".kanji_panel").append(html);
//   }

// }
