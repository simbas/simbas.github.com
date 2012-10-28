module.exports = function(grunt) {
	grunt.initConfig({
		mincss: {
			all: {
				src: ["css/lib/normalize.css","less/style.css"],
				dest: "css/min.css"
			}
		},
		less: {
			all: {
				files: {
					"less/style.css": "less/style.less"
				}
			}
		},
		clean: {
			before: {
				src:['less/style.css','css/min.css']
			},
			after: {
				src:['less/style.css']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib');
	grunt.registerTask('build', 'clean:before less mincss clean:after');
};
