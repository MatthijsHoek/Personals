module.exports = {
    watch: {
        options: {
            livereload: false
        },
        css: {
            files: ['**/*.scss', 'src/js/**/*.js'],
            tasks: ['sass', 'cssmin', 'uglify']
        },
    }
};