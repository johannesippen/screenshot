module.exports = function(grunt) {
  grunt.initConfig({
    sass: {         
      dist: {         
        options: {    
          style: 'expanded'
        },
        files: {    
          'screenshot.css': 'scss/screenshot.scss' 
        }
      },
      dist_min: { 
        options: {   
          style: 'compressed'
        },
        files: {
          'screenshot.min.css': 'scss/screenshot.scss'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass']);
};