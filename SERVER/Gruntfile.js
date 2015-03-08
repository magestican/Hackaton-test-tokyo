module.exports = function (grunt) {

    exec = require('child_process').exec;

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
            templates: {
                files: 'public/templates/**/*.html',
                tasks: ['ngtemplates', 'browserify']
            },
            js: {
                files: 'public/js/modules/**/*.js',
                tasks: ['browserify']
            },
            sass: {
                files: 'public/styles/sass/**/*.scss',
                tasks: ['sass', 'concat']
            }
        },

        ngtemplates: {
            build: {
                options: {
                    base: 'public/templates/directives',
                    prepend: ' ',
                    module: 'odigoapp'
                },
                src: ['public/templates/**/*.html'],
                dest: 'public/templates/compiledhtml.js'
            }
        },

        browserify: {
            'public/js/build/main.js': ['public/js/modules/main.js'],
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
                    'public/styles/build/sassmain.css': 'public/styles/sass/styles.scss'
                }
            }
        },

        concat: {
            options: {
                separator: ' '
            },
            css: {
                src: [
                     'public/styles/css/**/*.css',
					 'public/styles/build/sassmain.css',
                ],
                dest: 'public/styles/build/main.css'
            },
            lib: {
                src: [
                    'public/js/lib/angular.min.js',
                    'public/js/lib/angular-route.js',
                    'public/js/lib/angular-resource.js',
                    'public/js/lib/select2.js',
					'public/js/lib/semantic.js',
                ],
                dest: 'public/js/build/lib.js'
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
                    'public/js/build/lib.min.js': ['public/js/build/lib.js']
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
                    'public/js/build/main.min.js': ['public/js/build/main.js']
                }
            }
        },

        jasmine: {
            app: {
                src: [
                    'public/js/build/main.js'
                ],
                options: {
                    specs: 'public/js/test/*js',
                    vendor: [
                        'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.js',
                        'public/js/build/lib.js'
                    ],
                    helpers: [
                        'public/js/lib/angular-mocks.js'
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