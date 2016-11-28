module.exports = function(grunt) {
	
	grunt.initConfig({
		uglify: {
			js_target: {
				files: {
					'js/perfmatters.min.js': ['js/perfmatters.js'],
					'views/js/main.min.js': ['views/js/main.js']
				}
			}
		},
		cssmin: {
			css_target: {
				options: {
					rebase: false
				},
				files: {
					'css/style.min.css': ['css/style.css'],
					'views/css/bootstrap-grid.min.css': ['views/css/bootstrap-grid.css'],
					'views/css/style.min.css': ['views/css/style.css']
				}
			}
		},	 
		htmlmin: {
			dist_target: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'index.html': ['index_raw.html'],
					'views/pizza.html': ['views/pizza_raw.html']
				}
			}
		},	
		watch: {
			js_target: {
				files: ['js/*.js', 'views/js/*.js'],
				tasks: ['default']
			},
			css_target: {
				files: ['css/*.css', 'views/css/*.css'],
				tasks: ['default']
			},
			dist_target: {
				files: ['index_raw.html', 'views/pizza_raw.html'],
				tasks: ['default']
			}
		}		
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin', 'watch']);

};