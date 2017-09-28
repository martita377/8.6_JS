module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	
    browserSync: {
      dev: {
        bsFiles: {
           src : [
            'index.html',
            'js/*.js'
           ]
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    },

    watch: {
      scripts: {
        files: [
          '*.html', 
          'js/*.js'
        ],
        tasks: ['browserSync'],
        options: {
            spawn: false,
        },
      }
    }

  });

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['browserSync', 'watch']);
};