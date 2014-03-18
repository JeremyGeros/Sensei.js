var expect = require('expect.js');

var fs = require('fs');
var vm = require('vm');
var path = './dist/sensei.full.min.js';

var code = fs.readFileSync(path);
vm.runInThisContext(code);

describe("Sensei", function() {

  it("Converts hiragana", function() {
    expect(Sensei.hiragana('shi')).to.be('し');
  });

  it("Converts katakana", function() {
    expect(Sensei.katakana('shi')).to.be('シ');
  });

  it("Converts kanji", function() {
    expect(Sensei.kanji('koromo')).to.eql(['衣']);
  });

  it("Converts using convert method hiragana", function() {
    expect(Sensei.convert('hiragana', 'shi')).to.be('し');
  });

  it("Converts using convert method katakana", function() {
    expect(Sensei.convert('katakana', 'shi')).to.be('シ');
  });

  it("Converts using convert method kanji", function() {
    expect(Sensei.convert('kanji', 'koromo')).to.eql(['衣']);
  });

});
