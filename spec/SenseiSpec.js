describe("Sensei", function() {

  it("Converts hiragana", function() {
    expect(Sensei.hiragana('shi')).toBe('し');
  });

  it("Converts katakana", function() {
    expect(Sensei.katakana('shi')).toBe('シ');
  });

  it("Converts kanji", function() {
    expect(Sensei.kanji('koromo')).toEqual(['衣']);
  });

  it("Converts using convert method hiragana", function() {
    expect(Sensei.convert('hiragana', 'shi')).toBe('し');
  });

  it("Converts using convert method katakana", function() {
    expect(Sensei.convert('katakana', 'shi')).toBe('シ');
  });

  it("Converts using convert method kanji", function() {
    expect(Sensei.convert('kanji', 'koromo')).toEqual(['衣']);
  });

});
