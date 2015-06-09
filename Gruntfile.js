module.exports = function(grunt) {
    // Load the plugins
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        '**/*.html',
                        '**/*.css'
                    ]
                },
                options: {
                    open: false,
                    port: '8000',
                    server: {
                        baseDir: './'
                    }
                }
            }
        }
    });
    // Default task(s).
    grunt.registerTask('default', ['browserSync']);
};
