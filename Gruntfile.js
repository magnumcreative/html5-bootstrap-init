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
	          "css/<%= pkg.name %>.css": "less/<%= pkg.name %>.less"
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
	// Create custom directories - directories are set in package.json
	grunt.registerTask('setup', 'Setting up default directories', function() {
	  var p = grunt.file.readJSON('package.json');
	  var less_file_exists = grunt.file.exists(p.defautDirectories['less-dir']+"/"+ p.name+'.less');
	  var css_file_exists = grunt.file.exists(p.defautDirectories['css-dir']+"/"+p.name+'.css');
	  var src_file_exists = grunt.file.exists(p.defautDirectories['src-dir']+"/"+ p.name+'.js');
	  var js_file_exists = grunt.file.exists(p.defautDirectories['js-dir']+"/"+ p.name+'.min.js');
      if(!css_file_exists){
      	grunt.file.write(p.defautDirectories['css-dir']+"/"+ p.name+'.css',"");
      	grunt.log.writeln('Created file: '+p.defautDirectories['css-dir']+"/"+ p.name+'.css');
      }
	  if(!less_file_exists){
	  	grunt.file.write(p.defautDirectories['less-dir']+"/"+ p.name+'.less',"");
	  	grunt.log.writeln('Created file: '+p.defautDirectories['less-dir']+"/"+ p.name+'.less');
	  }
	  if(!src_file_exists){
	  	grunt.file.write(p.defautDirectories['src-dir']+"/"+ p.name+'.js',"");
	  	grunt.log.writeln('Created file: '+p.defautDirectories['src-dir']+"/"+ p.name+'.js');
	  }
	  if(!js_file_exists){
	  	grunt.file.write(p.defautDirectories['js-dir']+"/"+ p.name+'.min.js',"");
	  	grunt.log.writeln('Created file: '+p.defautDirectories['js-dir']+"/"+ p.name+'.min.js');
	  }
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['setup','uglify','jshint','less','watch']);
};