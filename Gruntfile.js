module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
	  uglify: {
	    options: {
	      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	    },
	    build: {
	      src: 'src/<%= pkg.name %>.js',
	      dest: 'js/<%= pkg.name %>.min.js'
	    }
	  },	  
	  jshint: {
	      all: [
	        'Gruntfile.js',
	        'src/**/*.js',
	      ],
	      options: {
	        jshintrc: '.jshintrc',
	      },
	    },
	  less: {
	      development: {
	        options: {
	          compress: true,
	          yuicompress: true,
	          optimization: 2
	        },
	        files: {
	          // target.css file: source.less file
	          "css/main.css": "less/main.less"
	        }
	      }
    	},
	  watch: {
	      all: {
		        files: ['<%= jshint.all %>', 'less/**/*.less'],
		        tasks: ['jshint','less'],
		    },
		},
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['uglify' , 'watch', 'jshint', 'less']);
};