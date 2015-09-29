module.exports = function(grunt) {

  grunt.initConfig({
    imagemin: {
        jpg: {
            options:{
                progressive: true,
                optimizationLevel: 3,
            }
        },
        dynamic: {                        // Another target
            files: [{
            expand: true,                  // Enable dynamic expansion
            cwd: 'images/',            // Src matches are relative to this path
            src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
            dest: 'images/'                  // Destination path prefix
          }]
        }
    },

    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 800,
            suffix: '_large_1x',
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
