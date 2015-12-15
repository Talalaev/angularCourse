module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower_concat: {
        all: {
            dest: '_/components/libs.js',
            //cssDest: '_/components/styles/_bower.css',
            exclude: [
				'angular'
			],
			bowerOptions: {
                relative: false
            }
        }
    },
    webpack: {
		def: {
			// webpack options 
            context: __dirname + "/_/components/js",
			entry: "./app.js",
			output: {
				path: __dirname + "/_/components/js",
				filename: "build.js",
                // создать внешную переменную
				library: "moduleHome"
			},
			// devtool: "source-map"
		}
	},
	concat: {
	    options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
		p: {
			src: [
                'bower_components/angular/angular.min.js',
				'_/components/libs.js',
				'_/components/js/build.js'
			],
			dest: '_/components/allScripts.js'
		},
		d: {
			src: [
                'bower_components/angular/angular.js',
				'_/components/libs.js',
				'_/components/js/build.js'
			],
			dest: '_/js/script.min.js'
		}
	},
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
            src: '_/components/allScripts.js',
            dest: '_/js/script.min.js'
        }
    },
    cssmin: {
        build: {
            src: '_/components/style.css',
            dest: '_/css/style.min.css'
        }
    },
	sass: {
		options: {
			compass: true,
			style: 'expanded',
			debugInfo: false
        },
		p: {
            src: '_/components/sass/style.sass',
            dest: '_/components/style.css'
        },
		d: {
			src: '_/components/sass/style.sass',
            dest: '_/css/style.min.css'
		}
	},
	compass: {
		options: {
            sassDir: '_/components/sass',
			cssDir: '_/css'
        }
	},
	watch: { // grunt watch для запуска отслеживания
		sass_d: {
			files: ['_/components/sass/*.sass'],
			tasks: ['compass', 'sass:d']
		},
		js_d: {
			files: ['_/components/js/*.js'],
			tasks: ['concat:d']
		},
		main: {
			files: ['_/components/sass/*.sass', '_/components/js/*.js'],
			tasks: ['compass', 'sass:d', 'concat:d']
		}
	}
  });

  // Load the plugin that provides the "uglify" task.
  //require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');

  // Default task(s).
  grunt.registerTask('default', ['webpack', 'compass', 'sass:p', 'bower_concat', 'concat:d', 'cssmin']);

};