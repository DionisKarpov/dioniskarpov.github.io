var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    livereload   = require('gulp-livereload');
    sourcemaps   = require('gulp-sourcemaps');
    autoprefixer = require('gulp-autoprefixer');
    browserSync  = require('browser-sync');
    reload       = browserSync.reload;
    paths        = {html:['./index.html'], css:['./sass/main.scss']};

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')

        .pipe(sourcemaps.init())

        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))

        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

        .pipe(sourcemaps.write(''))

        .pipe(gulp.dest('./css'))

        .pipe(reload({stream:true}));

});

gulp.task('html', function(){
  gulp.src(paths.html)
  .pipe(reload({stream:true}));
});

gulp.task('watch', function(){
    gulp.watch('./sass/**', ['sass']);
    gulp.watch(paths.html, ['html']);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: true,
    notify: false
  });
});

gulp.task('default', ['sass','watch','browserSync']);