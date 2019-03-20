module.exports = {
    watch: {
        options: {
            livereload: true
        },
        css: {
            files: ['**/*.scss', 'src/js/*.js'],
            tasks: ['sass', 'cssmin', 'uglify']
        },
    }
};