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

        uglify : {

			options : {
				banner : "/*! main.min.js file */\n"
            },
            
			build : {
                files: [{
                    expand: true,
                    src : "**/*.js",
                    dest : "js-min/main.min.js",
                    cwd: 'src/js'
                }]
				
			}

		},

        watch:{
            options: {
                livereload: true
            },
            css: {
                files: ['**/*.scss'],
                tasks: ['sass', 'cssmin']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
    
};