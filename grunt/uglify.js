module.exports = {
    uglify: {
        options: {
            mangle: false
        },

        build : {
            src : ["src/js/main.js"],
            dest : "src/js/js-min/main.min.js"
        }
    }
};