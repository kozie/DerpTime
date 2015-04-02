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
          port: 8080
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
		// karma: {
	  //   unit: {
    //     configFile: '<%= files.testConf %>',
    //     singleRun: true
	  //   }
	  // }
	});

	grunt.registerTask("build", ["browserify"]);
	grunt.registerTask("debug", ["build", "connect", "watch"]);
	grunt.registerTask("travis", ["build"])
	grunt.registerTask("default", ["build"]);
};
