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
                        '**/*.html'
                    ]
                },
                options: {
                    open: false,
                    port: '8000',
                    server: {
                        baseDir: './'
                    },
                    watchTask: true
                }
            }
        },
        swig: {
            dist: {
                options: {
                    data: {
                        title: 'BrowserSync - features & workflow integration',
                        impressJsDir: 'bower_components/impress.js/'
                    }
                },
                files: {
                    'index.html': ['swig/index.swig']
                }
            }
        },
        watch: {
            options: {
                atBegin: true,
                interrupt: false,
                livereload: true,
                spawn: false
            },
            swig: {
                files: ['swig/*.swig'],
                tasks: ['swig']
            }
        }
    });
    // Default task(s).
    grunt.registerTask('default', ['swig']);
    grunt.registerTask('sync', ['browserSync', 'watch']);
};
