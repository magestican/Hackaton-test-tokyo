module.exports = function (grunt) {

    exec = require('child_process').exec;

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            templates: {
                files: 'WEBSITE/templates/**/*.html',
                tasks: ['ngtemplates']
            },
            js: {
                files: 'WEBSITE/js/modules/**/*.js',
                tasks: ['browserify']
            },
            sass: {
                files: 'WEBSITE/styles/sass/**/*.scss',
                tasks: ['sass', 'concat']
            }
        },

        ngtemplates: {
            build: {
                options: {
                    base: 'WEBSITE/templates',
                    prepend: '',
                    module: 'odigotest'
                },
                src: ['WEBSITE/templates/**/*.html'],
                dest: 'WEBSITE/templates/compiledhtml.js'
            }
        },

        browserify: {
            'WEBSITE/js/build/main.js': ['WEBSITE/js/modules/main.js'],
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
                    'WEBSITE/styles/build/sassmain.css': 'WEBSITE/styles/sass/styles.scss'
                }
            }
        },

        concat: {
            options: {
                separator: ' '
            },
            css: {
                src: [
                     'WEBSITE/styles/css/**/*.css',
					 'WEBSITE/styles/build/sassmain.css',
                ],
                dest: 'WEBSITE/styles/build/main.css'
            },
            lib: {
                src: [
                    'WEBSITE/js/lib/angular.js',
					'WEBSITE/js/lib/semantic.js',
                ],
                dest: 'WEBSITE/js/build/lib.js'
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
                    'WEBSITE/js/build/lib.min.js': ['WEBSITE/js/build/lib.js']
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
                    'WEBSITE/js/build/main.min.js': ['WEBSITE/js/build/main.js']
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