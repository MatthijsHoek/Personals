module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass:{
            dist: {
                files: {
                    'src/styles/css/main.css' : 'src/styles/sass/main.scss'
                }
            }
        },

        cssmin:{
            target: {
                files: {
                'src/styles/css/main.css' : 'src/styles/css/main.css'
                }
            }
        },

        uglify: {
            options: {
                mangle: false
            },

            build : {
				src : ["src/js/main.js"],
				dest : "src/js/js-min/main.min.js"
			}
        },

        watch:{
            options: {
                livereload: true
            },
            css: {
                files: ['**/*.scss', 'src/js/*.js'],
                tasks: ['sass', 'cssmin', 'uglify']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.registerTask('default', ['watch']);
    
};