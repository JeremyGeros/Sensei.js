module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'dist/sensei.full.min.js': ['src/sensei/kanji.js', 'src/sensei/romaji.js', 'src/sensei.js'],
          'dist/sensei.kanji.min.js': ['src/sensei/kanji.js', 'src/sensei.js'],
          'dist/sensei.no.kanji.min.js': ['src/sensei/romaji.js', 'src/sensei.js']
        }
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    watch: {
      files: ['src/*', 'test/*'],
      tasks: ['mochaTest'],
    },
  });


  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('test', ['uglify', 'mochaTest']);

};