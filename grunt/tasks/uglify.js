module.exports = {
    uglify: {
        options: {
            mangle: false
        },

        build : {
            src : ["src/js/*.js"],
            dest : "src/js/js-min/main.min.js"
        }
    }
};