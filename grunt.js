module.exports = function(grunt) {
	grunt.initConfig({
		mincss: {
			all: {
				src: ["stylesheets/foundation.css","stylesheets/foundicons.css","stylesheets/app.css"],
				dest: "stylesheets/min.css"
			}
		},
		clean: {
			all: {
				src:['stylesheets/min.css']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib');
	grunt.registerTask('build', 'clean mincss');
	grunt.registerTask('default', 'build');
};
