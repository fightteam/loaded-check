module.exports = function(grunt){

    // 显示任务时间
    require("time-grunt")(grunt);
    // 载入任务插件
    require("load-grunt-tasks")(grunt);


    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
            },
            build: {
                src: "dist/<%=pkg.name %>.js",
                dest: "dist/<%= pkg.name %>.min.js"
            }               
        },

        // js格式验证
        jshint: {
            all: {
                src: [
                    "src/**/*.js", "Gruntfile.js"
                ],
                options: {
                    jshintrc: true
                }
            }
        },
        // 合并文件
        concat: {
            options: {
                // separator: ""
            },
            dist: {
                src: ["src/core.js", "src/helper.js", "src/check.js"],
                dest: "dist/<%=pkg.name %>.js"
            },
        },
        // 自动验证编译
        watch: {
            jshint: {
                files: ["src/**/*.js"],
                tasks: ["jshint:all", "requirejs:build", "compileBuild"]
            }
        }

    });

    // 默认任务
    grunt.registerTask("default", ["jshint:all", "concat", "compileBuild"]);


    // 开发
    grunt.registerTask("dev", ["default", "watch"]);

    // 压缩
    grunt.registerTask("dist", ["default", "uglify"]);

    // 注册自定义替换任务
    grunt.registerTask("compileBuild", "compile Build file.", function() {
        var name = "./dist/loaded-check.js";
        var file = grunt.file.read(name);

        var version = grunt.file.readJSON("./package.json").version;

        file = file.replace( /@VERSION/g, version )
                // 替换时间
                // yyyy-mm-ddThh:mmZ
                .replace( /@DATE/g, ( new Date() ).toISOString().replace( /:\d+\.\d+Z$/, "Z" ) );

        grunt.file.write( name, file );
    });
};

