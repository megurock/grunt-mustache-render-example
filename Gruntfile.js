'use strict';

module.exports = function (grunt) {

grunt.initConfig({

    clean: {
        mass: ['./output']
    },

    mustache_render: {
        mass: {
            files: (function() {
                var files = [];
                var allData = require('./data.js');

                for (var pageName in allData) {
                    var pageData = allData[pageName];
                    files.push({
                        data: pageData,
                        template: './template.html',
                        dest: './output/' + pageName + '.html'
                    });
                }

                return files;
            }())
        }
    }

});

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mustache-render');
    
    grunt.registerTask('mass', [ 'clean', 'mustache_render' ]);

};