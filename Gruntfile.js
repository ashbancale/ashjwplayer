module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.initConfig({
        less: {
          development: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            },
            files: {
              "public/stylesheets/style.css": "src/less/styles.less" // destination file and source file
            }
          }
        },        
        jshint: {
            all: ['Gruntfile.js', 'app_server/**/*.js', 'public/angular/**/*.js']
        },    
        jsonlint: {
          all: {
            src: [ 'app_server/models/data.json' ],
            options: {
              format: true,
              indent: 2,
            }
          }
        },   
        uglify: {
          my_target: {
            files: {
              'public/javascripts/creative.min.js': ['src/creative/creative.js']
            }
          }
        },             
        watch: {
            files: ['app_server/**/*.js', 'public/angular/**/*.js'],
            tasks: ['jshint'],
            styles: {
              files: ['src/less/**/*.less'], // which files to watch
              tasks: ['less'],
              options: {
                nospawn: true
              }
            }
        }            
    });

    grunt.registerTask('default', ['less', 'watch']);    
};