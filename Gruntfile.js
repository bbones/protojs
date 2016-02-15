module.exports = function( grunt ) { 
 
    // Configure tasks
    grunt.initConfig( {
 
    requirejs: {
        compile: {
            options: {
                name                    : "main",
                baseUrl                 : "app/js/",
                mainConfigFile          : "app/js/main.js",
                out                     : "app/js/main.min.js",
                deps                    : [ '../lib/requirejs/require' ],
                optimize                : "none",
                preserveLicenseComments : false,
                generateSourceMaps      : false
            }
        }
        },
 
    uglify : {
            dist: {
                src  : [ 'app/js/main.min.js' ],
                dest : 'app/js/main.min.js'
            }
    }    
 
    } );
 
    // Load tasks from the node_modules folder
    grunt.loadNpmTasks( 'grunt-contrib-requirejs' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
 
    // define tasks list
    grunt.registerTask( 
        'default', 
        [ 'requirejs', 'uglify' ] );
    grunt.registerTask( 
        'require', [ 'require' ] );
};