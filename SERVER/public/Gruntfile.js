module.exports = function (grunt) {

    exec = require('child_process').exec;

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            templates: {
                files: 'templates/**/*.html',
                tasks: ['ngtemplates']
            },
            js: {
                files: 'js/modules/**/*.js',
                tasks: ['browserify']
            },
            sass: {
                files: 'styles/sass/**/*.scss',
                tasks: ['sass', 'concat']
            }
        },

        ngtemplates: {
            build: {
                options: {
                    base: 'templates/directives',
                    prepend: ' ',
                    module: 'odigoapp'
                },
                src: ['templates/**/*.html'],
                dest: 'templates/compiledhtml.js'
            }
        },

        browserify: {
            'js/build/main.js': ['js/modules/main.js'],
            options: {
                debug: false
            }
        },


        sass: {
            build: {
                options: {
                    style: 'expanded',
                    compass: true
                },
                files: {
                    'styles/build/sassmain.css': 'styles/sass/styles.scss'
                }
            }
        },

        concat: {
            options: {
                separator: ' '
            },
            css: {
                src: [
                     'styles/css/**/*.css',
					 'styles/build/sassmain.css',
                ],
                dest: 'styles/build/main.css'
            },
            lib: {
                src: [
                    'js/lib/angular.min.js',
                    'js/lib/angular-route.js',
					'js/lib/semantic.js',
                ],
                dest: 'js/build/lib.js'
            },

        },


        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: false
            },
            lib: {
                options: {
                    mangle: false
                },
                files: {
                    'js/build/lib.min.js': ['js/build/lib.js']
                }
            },
            app: {
                options: {
                    mangle: false,
                    define: {
                        DEBUG: false
                    }
                },
                files: {
                    'js/build/main.min.js': ['js/build/main.js']
                }
            }
        },

        jasmine: {
            app: {
                src: [
                    'assets/js/build/main.js'
                ],
                options: {
                    specs: 'assets/js/test/*js',
                    vendor: [
                        'assets/js/build/lib.js'
                    ],
                    helpers: [
                        'assets/js/lib/angular-mocks.js'
                    ],
                    keepRunner: true
                }
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browserify');

    // Different builds as per request by grunt command line
    grunt.registerTask('default', []);
    grunt.registerTask('build', ['ngtemplates', 'browserify', 'sass', 'concat', 'uglify']);
    grunt.registerTask('test', ['browserify', 'jasmine']);
    grunt.registerTask('production', ['browserify', 'jasmine', 'ngtemplates', 'concat', 'uglify']);

};