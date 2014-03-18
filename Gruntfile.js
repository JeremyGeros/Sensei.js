module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
          'dist/sensei.full.min.js': ['src/sensei/kanji.js', 'src/sensei/romaji.js', 'src/sensei.js'],
          'dist/sensei.kanji.min.js': ['src/sensei/kanji.js', 'src/sensei.js'],
          'dist/sensei.no.kanji.min.js': ['src/sensei/romaji.js', 'src/sensei.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default', ['uglify']);

};