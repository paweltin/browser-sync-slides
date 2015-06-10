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
                    ghostMode: {
                        scroll: false
                    },
                    open: false,
                    port: '3004',
                    reloadOnRestart: true,
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
