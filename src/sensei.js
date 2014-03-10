var romajiMaxLen = 5; // _.max(_.collect(_.keys(romajitable), function(item) {return item.length}))
var kanjiMaxLen = 64; // _.max(_.collect(_.values(kanji), function(item) {return item.length}))

Sensei.kanji = function(romaji) {
  var kanjiResult = "", position = 0, len = kanjiMaxLen;
  
  while (position < romaji.length) {
    if (romaji.length - position < len) {
      len = romaji.length - position;
    }
    found = false;

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

Sensei.katakana = function(romaji) {

}

Sensei.hiragana = function(romaji) {
  
}


    } else if (current_alphabet == "katakana" || current_alphabet == "hiragana") {
      // hiragana or katakana
      romaji = this.character;
      hiragana = "";
      katakana = "";
      pos = 0;
      while (pos < romaji.length) {
        len = maxlen;
        if (romaji.length - pos < len) {
          len = romaji.length - pos;
        }
        found = false;
        while (len > 0 && !found) {
          if (romajitable[romaji.substring(pos, pos + len)] != null) {
            hiragana += romajitable[romaji.substring(pos, pos + len)].hiragana;
            katakana += romajitable[romaji.substring(pos, pos + len)].katakana;
            pos += len;
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
      if (current_alphabet == 'katakana') {
        return katakana;
      } else {
        return hiragana;
      }

    } else {
      // do nothing
      return this.character;
    }
  }

  function populate_kanji_panel(romaji_to_display) {
    $(".kanji_panel_romaji").html(romaji_to_display);
    $(".kanji_panel").show();
    $(".kanji_panel").html("");
    choices = kanji[romaji_to_display].split('');
    html = "";
    for (i = 0; i < choices.length; i++) {
      html += "<div class='option'>" + choices[i] + "</div>";
    }
    $(".kanji_panel").append(html);
  }

}
