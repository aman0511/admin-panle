var gulp = require('gulp')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')

// requires browserify and vinyl-source-stream
var browserify = require('browserify')
var source = require('vinyl-source-stream')

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        port: 4000
    })
})


gulp.task('browserify', function() {
    // Grabs the app.js file
    var files = [
        './app/app.js',
        './app/routes.js',
        './app/controller/login.controller.js',
        './app/controller/header.controller.js',
        './app/services/authentication.service.js',
        './app/services/token.service.js',
        './app/services/interceptor.service.js',
        './app/services/user.service.js'        
    ];
    return browserify({ entries: [files] })
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
})


gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['browserify']);
    gulp.watch('app/*.js', ['browserify']);
})

gulp.task('htmlmin', function() {
    log ('** Minifying HTML **');
    return gulp.src(config.src.html)
        .pipe($.htmlmin({
            removeComments: true,
            removeCommentsFromCDATA: true,
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(config.build.htmlDir));
});

gulp.task('default', ['connect', 'watch'])