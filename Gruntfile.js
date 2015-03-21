module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

	grunt.initConfig({
		browserify: {
			dist: {
				files: {
					'dist/app.js': ['src/main.js']
				},
				options: {
					transform: ['babelify']
				}
			}
		},
    connect: {
      server: {
        options: {
          port: 8000
        }
      }
    },
    watch: {
      script: {
        files: ['src/**/*.js'],
        tasks: ['browserify'],
        options: {
          spawn: false
        }
      }
    }
	});

	grunt.registerTask("default", ["browserify", "connect", "watch"]);
};
